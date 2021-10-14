# ThingsPro Edge Troubleshooting

> This document is written for ThingsPro Edge users, especially external parties, such as FAE/GCS/RBU/Partners, to troubleshoot issues and provide the essential information for further diagnosis to the RD team.

Table of Content

[TOC]

## General

### What is the default username/password of ThingsPro Edge?

- Web GUI
    - Username: `admin`
    - Password: `admin@123`

- SSH login
    - Username: `moxa`
    - Password: `moxa`

### How to collect software versions on the Moxa device for reporting issues?

- Get platform version `kversion`
- Get ThingsPro Edge version `cat /etc/pversion`
- Show all the ThinsPro Edge application runtime status `appman app ls`

### Check the logs of Device App

Device configuration and network settings are managed by **Device App** in ThingsPro Edge. Therefore, if something wrong relates to device configuration or networking, [we can check the logs from Device App for troubleshooting](#how-to-get-logs-from-apps-in-thingspro-edge)

### How to get logs from Apps in ThingsPro Edge?

You can get all the output by using command `journalctl -f -n 100 APPNAME=<APPNAME>` . (Replace **<APPNAME>** to the App you want to check.)

Here is the output of the command for checking Device App `journalctl -f -n 100 APPNAME=device` :

    root@Moxa:/home/moxa# journalctl -f -n 100 APPNAME=device
    Feb 11 15:11:18 Moxa device_app_1[32656]: [general] device.go:211: mountpoint:  /usr/bin/fw_printenv
    Feb 11 15:11:18 Moxa device_app_1[32656]: [general] device.go:211: mountpoint:  /run/moxa-cellular-utils
    Feb 11 15:11:18 Moxa device_app_1[32656]: [general] device.go:211: mountpoint:  /host/usr/share
    Feb 11 15:11:18 Moxa device_app_1[32656]: [general] device.go:211: mountpoint:  /run/taghub/taghubd.sock
    Feb 11 15:11:18 Moxa device_app_1[32656]: [general] device.go:211: mountpoint:  /var/tpdevice/product.d
    Feb 11 15:11:18 Moxa device_app_1[32656]: [general] device.go:211: mountpoint:  /run/taghub/mgmt.sock
    Feb 11 15:11:18 Moxa device_app_1[32656]: [general] device.go:211: mountpoint:  /var/tpdevice/moxaenv
    Feb 11 15:11:18 Moxa device_app_1[32656]: [general] device.go:211: mountpoint:  /host/var/run
    Feb 11 15:11:18 Moxa device_app_1[32656]: [general] device.go:211: mountpoint:  /host/var/run/lock
    Feb 11 15:11:18 Moxa device_app_1[32656]: [general] device.go:211: mountpoint:  /host/var/run/user/1000
    Feb 11 15:11:18 Moxa device_app_1[32656]: [general] device.go:211: mountpoint:  /host/var/run/docker/netns/0efe2a12ed07
    Feb 11 15:11:18 Moxa device_app_1[32656]: [general] device.go:211: mountpoint:  /host/var/run/docker/netns/33053f00c3a6
    Feb 11 15:11:18 Moxa device_app_1[32656]: [general] device.go:211: mountpoint:  /host/var/run/docker/netns/default
    Feb 11 15:11:18 Moxa device_app_1[32656]: [manager] manager.go:271: [Update Device DB] [{"type":"general","description":"1","hostName":"Moxa","modelName":"UC-8100A-ME-T-LX","deviceType":"gateway","serialNumber":"TAICB1046773","firmwareVersion":"1.3.1","thingsproVersion":"2.0.0-1040","cpu":"ARMv7 Processor rev 2 (v7l)","memorySize":1055838208,"disk":[{"name":"System","mount":"/","device":"/dev/root","total":6827344896,"free":4646862848,"used":1893639168,"protect":838860800,"percent":28.95250492038072,"tags":{"used":"systemDiskUsed","free":"systemDiskFree","percent":"systemDiskPercent"}}],"lastBootTime":"2020-02-07T10:10:45+08:00"}]

### Enable debug messages for cloud app

If you want to troubleshoot any of the following functions in ThingsPro Edge: **Device Lifecycle Management (DLM), MQTT, Azure IoT Edge, and Azure IoT Device**, you can enable debug mode by creating an empty file `/var/thingspro/apps/cloud/data/setting/debug`.

    # Enable debug flag
    touch /var/thingspro/apps/cloud/data/setting/debug
    
    # Restart cloud app
    appman app restart cloud

After debug flag file has been created and the cloud app has been restarted, you'll be able to get lower-level debug messages by executing command `journalctl -f -n 100 APPNAME=cloud`

### Enable debug messages for thingspro-agent

If you want to troubleshoot thingspro-agent, you can enable debug mode by creating an empty file `/var/thingspro/iotedge/debug`.

    # Enable debug flag
    touch /var/thingspro/iotedge/debug
    
After debug flag file has been created and the cloud app has been restarted, you'll be able to get lower-level debug messages by executing command `journalctl CONTAINER_NAME=thingspro-agent -f`

## Azure IoT Edge

### Pre-check list

1. Make sure the device have internet access (e.g. `ping coke.com`)
2. Make sure the system time is correct. (e.g. Enable NTP in time configuration)
3. IoT Hub Connection String must be unique. Don't share connection string across different devices.
4. Pin Azure IoT Edge images at specific version by tag

    Find all the versions on [GitHub Azure IoT Edge release page](https://github.com/Azure/iotedge/releases)

    For example, change the default version from 1.0 to an more specific version

    - Edge Hub Image: [mcr.microsoft.com/azureiotedge-hub:1.0](http://mcr.microsoft.com/azureiotedge-hub:1.0) —> [mcr.microsoft.com/azureiotedge-hub:1.0](http://mcr.microsoft.com/azureiotedge-hub:1.0).**8.3**
    - Edge Agent Image: [mcr.microsoft.com/azureiotedge-agent:1.0](http://mcr.microsoft.com/azureiotedge-agent:1.0) —> [mcr.microsoft.com/azureiotedge-agent:1.0](http://mcr.microsoft.com/azureiotedge-agent:1.0).**8.3**

    The instruction of how to pin the version can be found [here](https://docs.microsoft.com/en-us/azure/iot-edge/production-checklist#use-tags-to-manage-versions).

### Perform self-check command from Azure IoT Edge

If you are using Azure IoT Edge on ThingsPro Edge, you are encouraged to perform the self-check (`iotedge check`) before reporting the issue.

For instance, if you have difficulties to retrieve messages from Azure IoT Hub, please try to run command `iotedge check` on the unit. This command will pull a docker image from Azure and run some essential tests for troubleshooting.

The output of the command `iotedge check` would be like below:

    root@Moxa:/home/moxa# iotedge check
    Configuration checks
    --------------------
    √ config.yaml is well-formed
    √ config.yaml has well-formed connection string
    √ container engine is installed and functional
    √ config.yaml has correct hostname
    × config.yaml has correct URIs for daemon mgmt endpoint
        Error: could not execute list-modules request: an error occurred trying to connect: Connection refused (os error 111)
    ‼ latest security daemon
        Installed IoT Edge daemon has version 1.0.7.1 but version 1.0.8 is available.
        Please see https://aka.ms/iotedge-update-runtime for update instructions.
    √ host time is close to real time
    √ container time is close to host time
    √ DNS server
    ‼ production readiness: certificates
        Device is using self-signed, automatically generated certs.
        Please see https://aka.ms/iotedge-prod-checklist-certs for best practices.
    √ production readiness: certificates expiry
    √ production readiness: container engine
    ‼ production readiness: logs policy
        Container engine is not configured to rotate module logs which may cause it run out of disk space.
        Please see https://aka.ms/iotedge-prod-checklist-logs for best practices.
        You can ignore this warning if you are setting log policy per module in the Edge deployment.
    
    Connectivity checks
    -------------------
    √ host can connect to and perform TLS handshake with IoT Hub AMQP port
    √ host can connect to and perform TLS handshake with IoT Hub HTTPS port
    √ host can connect to and perform TLS handshake with IoT Hub MQTT port
    √ container on the default network can connect to IoT Hub AMQP port
    √ container on the default network can connect to IoT Hub HTTPS port
    √ container on the default network can connect to IoT Hub MQTT port
    √ container on the IoT Edge module network can connect to IoT Hub AMQP port
    √ container on the IoT Edge module network can connect to IoT Hub HTTPS port
    √ container on the IoT Edge module network can connect to IoT Hub MQTT port
    √ Edge Hub can bind to ports on host
    
    One or more checks raised errors. Re-run with --verbose for more details.

The above command will require the internet connection and it will also download the self-check image from Microsoft.

### Advanced troubleshooting step by step

After you've performed the self-check command above, we can try to execute and capture the output of the commands below for getting more insights for the engineering team.

    # Check internet connection by PING 
    ping www.google.com
    
    # Check system clock
    date
    
    # Check Cellular signal
    cell_mgmt signal_adv
    
    # Show IoT edge status, make sure all the modules are running as expected
    iotedge list
    
    # Check docker runtime status
    docker ps
    docker image ls
    
    # Bootstrap sequence: iotedged -> edgeAgent -> edgeHub and other edge modules (includes thingspro-agent)
    # thingspro-agent connects to ThingsPro Edge internal tag service to collect data and publish to edgeHub then edgeHub follows routing rules to the cloud) 
    journalctl -f -n 100 CONTAINER_NAME={edgeAgent | thingspro-agent | edgeHub}
    
    # follow logs from iotedge
    journalctl -f -a -u iotedge
    
    # follow logs from appman (ThingsPro Edge internal service)
    journalctl -f -a -u appman
    

### Make it production ready

Before rolling out the solution, make sure you've followed the guide [here](https://docs.microsoft.com/en-us/azure/iot-edge/production-checklist).

## TagHub

### How to check if selected tags were collected by TagHub

- Use ThingsPro TagHub open api
```
# Collect tag value by oapi with polling interval 1000ms

curl "https://${URL}/api/v1/tags/monitor/system/status?tags=cpuUsage,memoryUsage&streamInterval=1000" \
        -X GET \
        -H "Content-Type:application/json" \
        -H "mx-api-token:${TOKEN}"
        
        
# Collect tag value by oapi with onChanged event flag

curl "https://${URL}/api/v1/tags/monitor/system/status?tags=cpuUsage,memoryUsage&onChanged" \
        -X GET \
        -H "Content-Type:application/json" \
        -H "mx-api-token:${TOKEN}"

```

- If you are authorized to login the unit, we provide a built-in utility to help you catch in-air tags directly.

```
# Listen to the tag by provider name.

taghubd sub -p modbus_tcp_master

# Listen to the tag by source name which is usually device name for protocol tags.

taghubd sub -s ioLogik

# Listen to the tag by tag name.

taghubd sub -t di0

# More details of taghubd

taghubd --help

```

> You can feel free to combine above options to specify the tag you desired.
