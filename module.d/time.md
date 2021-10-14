# Time Configuration APIs
Release Date: 2019/12/10
Time Configuration APIs

## Version: 1.3.0

### /device/time

#### GET
##### Description

Get device time configuration.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Device time configuration. |

#### PATCH
##### Description

Update device time configuration.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Device time configuration |

### /device/zoneinfo

#### GET
##### Description

Get current timezone information

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | success |

### Models

#### TimeInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| type | string | Interface type.<br>_Example:_ `"time"` | No |
| lastUpdateTime | string | Last update time with RFC3339 format after time settings. '-' means not updated yet since NTP updated and enabled. <br>_Example:_ `"2015-03-26T16:00:00+08:00"` | No |
| time | string | Current system time (format: RFC3339).<br>_Example:_ `"2015-03-26T16:27:48+08:00"` | No |
| timezone | string | device timezone.<br>_Example:_ `"Asia/Taipei"` | No |
| ntp | object |  | No |

#### TimezoneInfo

Timezone information

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| zone | [ object ] | TZ zone list with cca2 and TZ | Yes |
| iso3166 | [ object ] | ISO 3166 alpha-2 country codes | Yes |

**Example**
<pre>{
  "data": {
    "zone": [
      {
        "cca2": "AD",
        "name": "Europe/Andorra",
        "offset": "+0100"
      },
      {
        "cca2": "AE",
        "name": "Asia/Dubai",
        "offset": "+0400"
      },
      {
        "cca2": "AF",
        "name": "Asia/Kabul",
        "offset": "+0430"
      }
    ],
    "iso3166": [
      {
        "cca2": "AD",
        "name": "Andorra"
      },
      {
        "cca2": "AE",
        "name": "United Arab Emirates"
      },
      {
        "cca2": "AF",
        "name": "Afghanistan"
      }
    ]
  }
}</pre>

#### TimezoneZone

ISO 3166 alpha-2 country code and zone name

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cca2 | string | ISO 3166 alpha-2 country code | Yes |
| name | string | zone name | Yes |
| offset | string | zone offset (format should be "+0800", etc) | Yes |

#### TimezoneIso3166

ISO 3166 alpha-2 country code and country name

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| cca2 | string | ISO 3166 alpha-2 country code | Yes |
| name | string | The usual English name for the coded region | Yes |
