# latest-browsers.js

JavaScript (TypeScript) library to get the latest browser versions and download links.

## Usage

```shell
$ npm install latest-browsers
# or
$ yarn add latest-browsers
$ pnpm add latest-browsers
```

```ts
import { fetchLatest } from 'latest-browsers';

const info = await fetchLatest({
  browser: 'chrome',
  channel: 'beta',
  platform: 'macos',
});
console.log(info);
```

Output:

```ts
{
  browser: 'chrome',
  version: '115.0.5790.90',
  channel: 'beta',
  downloadLink: 'https://dl.google.com/chrome/mac/universal/beta/googlechromebeta.dmg',
  platform: 'macos',
  releaseDate: '2023-07-12T18:30:00.000Z'
}
```

## Supported Browsers and Channels

```ts
// Google Chrome
{ browser: 'chrome', channel: 'stable', platform: 'macos' }
{ browser: 'chrome', channel: 'stable', platform: 'windows' }
{ browser: 'chrome', channel: 'stable', platform: 'linux' }
{ browser: 'chrome', channel: 'beta', platform: 'macos' }
{ browser: 'chrome', channel: 'beta', platform: 'windows' }
{ browser: 'chrome', channel: 'beta', platform: 'linux' }
{ browser: 'chrome', channel: 'dev', platform: 'macos' }
{ browser: 'chrome', channel: 'dev', platform: 'windows' }
{ browser: 'chrome', channel: 'dev', platform: 'linux' }
{ browser: 'chrome', channel: 'canary', platform: 'macos' }
{ browser: 'chrome', channel: 'canary', platform: 'windows' }

// Firefox
{ browser: 'firefox', channel: 'stable', platform: 'macos' }
{ browser: 'firefox', channel: 'stable', platform: 'windows' }
{ browser: 'firefox', channel: 'stable', platform: 'linux' }
{ browser: 'firefox', channel: 'beta', platform: 'macos' }
{ browser: 'firefox', channel: 'beta', platform: 'windows' }
{ browser: 'firefox', channel: 'beta', platform: 'linux' }
{ browser: 'firefox', channel: 'dev', platform: 'macos' }
{ browser: 'firefox', channel: 'dev', platform: 'windows' }
{ browser: 'firefox', channel: 'dev', platform: 'linux' }
{ browser: 'firefox', channel: 'nightly', platform: 'macos' }
{ browser: 'firefox', channel: 'nightly', platform: 'windows' }
{ browser: 'firefox', channel: 'nightly', platform: 'linux' }

// Microsoft Edge
{ browser: 'edge', channel: 'stable', platform: 'macos' }
{ browser: 'edge', channel: 'stable', platform: 'windows' }
{ browser: 'edge', channel: 'stable', platform: 'linux' }
{ browser: 'edge', channel: 'beta', platform: 'macos' }
{ browser: 'edge', channel: 'beta', platform: 'windows' }
{ browser: 'edge', channel: 'beta', platform: 'linux' }
{ browser: 'edge', channel: 'dev', platform: 'macos' }
{ browser: 'edge', channel: 'dev', platform: 'windows' }
{ browser: 'edge', channel: 'dev', platform: 'linux' }
{ browser: 'edge', channel: 'canary', platform: 'macos' }
```
