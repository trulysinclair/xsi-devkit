# XSI DevKit

The Unofficial Cisco Broadworks Xtended Services Interface DevKit.

## Installation & Setup

```bash
yarn add xsi-devkit
```

## Usage

```typescript
import {xsiActions} from "xsi-devkit";

const actionsClient = xsiActions({
  hostname: process.env.XSI_HOSTNAME,
  username: process.env.XSI_USERNAME,
  password: process.env.XSI_PASSWORD,
})

const getDnis = async (callCenter: string) => {
  const {data, error} = await actionsClient.GET(
    '/callcenter/{callcenter}/profile/dnis',
    {
      params: {
        path: {
          callcenter: callCenter,
        },
      },
    })

  if (error) {
    logger.error(e, 'XSI request failed')
    return null
  }

  return data.ACDDNIS.dnisInfoList.dnisInfo
}


```

### Requesting a Subscription