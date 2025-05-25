# XSI DevKit

The Unofficial Cisco Broadworks Xtended Services Interface DevKit.

I'm currently working on going over the entire XSI manual that I own and writing this library around it. I've done a lot
of trial and error working with XSI at work and so I'm doing what seems to work.

## Roadmap

- [ ] Raw XML support
- [ ] Library around `openapi-fetch`
- [ ] Fully typed API coverage
- [ ] Digitized docs, starting with GitHub Wiki?

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