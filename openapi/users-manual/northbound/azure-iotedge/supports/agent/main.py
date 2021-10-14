import time
import os
import sys
import requests
import asyncio
import json
import threading
from azure.iot.device.aio import IoTHubModuleClient
from azure.iot.device import MethodResponse

f = open("/var/thingspro/data/mx-api-token")
THINGSPRO_API_TOKEN = f.read()
f.close()

UPLOAD_INTERVAL = 5
UPLOAD_TAGS = []
MODULE_PROPERTIES = {
    'uploadInterval': UPLOAD_INTERVAL,
    'uploadTags': UPLOAD_TAGS
}


def desired_update(desired):
    global UPLOAD_INTERVAL
    global UPLOAD_TAGS

    print("[DESIRED] %s" % json.dumps(desired))

    reported = {}

    # application property - uploadInterval
    if 'uploadInterval' in desired:
        if desired['uploadInterval'] == None or desired['uploadInterval'] <=0:
            UPLOAD_TAGS = 5
        else:
            UPLOAD_INTERVAL = desired['uploadInterval']
        reported['uploadInterval'] = UPLOAD_INTERVAL
    # application property - uploadTags
    if 'uploadTags' in desired:
        if desired['uploadTags'] == None:
            UPLOAD_TAGS = []
        else:
            UPLOAD_TAGS = desired['uploadTags']
        reported['uploadTags'] = UPLOAD_TAGS
    # thingspro property - device/general/description
    if 'description' in desired:
        code, resp = thingspro_patch('device/general', json.dumps({
            'description': desired['description']
        }))
        if code != 200:
            print("[ERROR] Unexpected error in thingspro_patch, code:%d, response:%s" %
                  (code, resp))
        else:
            reported['description'] = desired['description']
    return reported


def thingspro_patch(path, body):
    r = requests.patch(
        "http://172.31.8.1:59000/api/v1/"+path,
        data=body,
        headers={"mx-api-token": THINGSPRO_API_TOKEN},
        verify=False
    )
    return r.status_code, r.text


def get_thingspro_tag(tag):
    resp = requests.get(
        "http://172.31.8.1:59000/api/v1/tags/monitor/{}/{}?tags={}".format(
            tag["providerName"], tag["moduleName"], tag["tagName"]),
        headers={"mx-api-token": THINGSPRO_API_TOKEN},
        verify=False
    )
    if resp.status_code < 200 or resp.status_code > 299:
        print("[ERROR] Unexpected error in get_thingspro_tag, code:%d, response:%s" %
              (resp.status_code, resp.text))
        return []
    return json.loads(resp.text)['data']


def set_thingspro_tag(tag):
    resp = requests.put(
        "http://172.31.8.1:59000/api/v1/tags/access/{}/{}/{}".format(
            tag["providerName"], tag["moduleName"], tag["tagName"]),
        headers={"mx-api-token": THINGSPRO_API_TOKEN},
        data=json.dumps({"dataType": tag['dataType'], "dataValue": tag['dataValue']}),
        verify=False
    )
    if resp.status_code < 200 or resp.status_code > 299:
        print("[ERROR] Unexpected error in set_thingspro_tag, code:%d, response:%s" %
              (resp.status_code, resp.text))
    return resp.status_code


async def main():
    try:
        print("*************************")
        print("*    IoT Hub Client     *")
        print("*************************\n")

        # The client object is used to interact with your Azure IoT hub.
        module_client = IoTHubModuleClient.create_from_edge_environment()

        # connect the client.
        await module_client.connect()

        # command_listener is invoked when the module's direct comand is triggered.
        async def command_listener(module_client):
            while True:
                try:
                    # blocking call
                    method_request = await module_client.receive_method_request(method_name='tagWrite')
                    print("[COMMAND] name: tagWrite, data: %s" %
                          method_request.payload)

                    # write tag data
                    status = set_thingspro_tag(method_request.payload)

                    # response
                    method_response = MethodResponse.create_from_method_request(
                        method_request, status, {"status": status}
                    )
                    await module_client.send_method_response(method_response)
                    print("[COMMAND] response: %d", status)

                except Exception as ex:
                    print("[ERROR] Unexpected error in command_listener: %s" % ex)

        # twin_patch_listener is invoked when the module twin's desired properties are updated.
        async def twin_patch_listener(module_client):
            # get current settings from module twin
            config = await module_client.get_twin()
            reported = desired_update(config['desired'])
            await module_client.patch_twin_reported_properties(reported)
            print("[REPORTED] %s" % json.dumps(reported))

            while True:
                try:
                    data = await module_client.receive_twin_desired_properties_patch()  # blocking call
                    reported = desired_update(data)
                    await module_client.patch_twin_reported_properties(reported)
                    print("[REPORTED] %s" % json.dumps(reported))
                except Exception as ex:
                    print("[ERROR] Unexpected error in twin_patch_listener: %s" % ex)

        # tag_publisher publish tags regularly
        async def tag_publisher(module_client):
            global UPLOAD_INTERVAL
            global UPLOAD_TAGS

            while True:
                try:
                    for tag in UPLOAD_TAGS:
                        tagData = get_thingspro_tag(tag)
                        if len(tagData) <= 0:
                            print(
                                "[ERROR] The tags collected from thingspro is empty")
                            continue
                        message = json.dumps(tagData[0])
                        await module_client.send_message_to_output(message, "upload")
                        print("[D2C] %s" % message)
                except Exception as ex:
                    print("[ERROR] Unexpected error in tag_publisher: %s" % ex)
                # sleep
                await asyncio.sleep(UPLOAD_INTERVAL)

        # define behavior for halting the application
        def stdin_listener():
            while True:
                try:
                    selection = input()
                    if selection == "Q" or selection == "q":
                        print("[INFO] Quitting...")
                        break
                except:
                    time.sleep(10)

        # Schedule task for Listener
        listeners = asyncio.gather(
            tag_publisher(module_client), command_listener(module_client), twin_patch_listener(module_client))

        # Run the stdin listener in the event loop
        loop = asyncio.get_event_loop()
        user_finished = loop.run_in_executor(None, stdin_listener)

        # Wait for user to indicate they are done listening for messages
        await user_finished

        # Cancel listening
        listeners.cancel()

        # Finally, disconnect
        await module_client.disconnect()

    except Exception as e:
        print("[ERROR] Unexpected error %s " % e)
        raise

if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
    loop.close()
