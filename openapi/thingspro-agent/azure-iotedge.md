# Azure IoT Edge + ThingsPro Edge

1. Setup ThingsPro Agent (Add module from Azure Portal)
    * docker image:
        * `moxa2019/thingspro-agent:2.0.0-528-armhf`
        * `moxa2019/thingspro-agent:2.0.0-528-amd64`
    * Container Create Option
        ```
        {
          "HostConfig": {
            "Binds": [
                "/var/thingspro/apps/cloud/data/setting/:/var/thingspro/cloud/setting/",
                "/run/:/host/run/",
                "/var/thingspro/data/:/var/thingspro/data/"
            ]
          }
        }
        ```
2. Setup ThingsPro Edge
    * [network](https://thingspro-edge.moxa.online/v1.1.0/device/device.html#tag/ethernets/paths/~1device~1ethernets~1{id}/patch)
    * [time](https://thingspro-edge.moxa.online/v1.1.0/device/device.html#tag/time/paths/~1device~1time/patch)
    * (optional)[enable ssh](https://thingspro-edge.moxa.online/v1.1.0/core/core.html#tag/systems/paths/~1system~1sshserver/put)
3. Setup Azure Iotedge
    * [iotedge](https://thingspro-edge.moxa.online/v1.1.0/iotedge/iotedge.html#tag/iotedge/paths/~1azure-iotedge/patch)
