---
title: my hello page title
description: my hello page description
hide_table_of_contents: false
---

## ThingsPro Edge v2.2.0-3074 ##
Release Date: 9th June, 2021.

#### New Features ####
- Supports the OPC UA Server protocol.
- Supports configuration reset.
- Adds RESTful API for managing Wi-Fi clients.
- Supports retrieval of endorsement key by Azure IoT Edge.
- Adds Moxa DLM Service under Cloud Connectivity*.
- Supports provisioning of configuration settings to ThingsPro Proxy.
> * Note: The Moxa DLM Service is currently only available to customers in Taiwan.

#### Fixed Issues ####
- Incorrect MAC address of DHCP Client in the message payload.
- Wi-Fi AP cannot connect when Broadcast SSID is disabled.
- Incorrect data type (from uint to int) in the TagHub for Modbus tags.
- Default route becomes obsolete after cellular function is enabled.

#### Enhancements ####
- Improved the network routing stability.
- Improved the memory usage chart display on the System Overview page.
- Improved the server connection status display for Sparkplug.
- Improved the response format for the API invocation of MQTT.

## ThingsPro Proxy 1.2.0 ##
Release Date: 4th May, 2021.

#### New Features ####
- Provisioning plan:
- Supports deploying Linux scripts
- Supports AWS IoT Core for device enrollment
- Supports enrollment to multiple clouds
- Supports specifying the model of the target device
- Supports installing ThingsPro Edge from a local host by uploading the installation package.

#### Enhancements ####
- Adds time synchronization between devices and the host before executing the provisioning plan.
- Extends device discovery to all LAN interfaces on the devices.
