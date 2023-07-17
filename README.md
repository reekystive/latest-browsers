# latest-browsers.js

JavaScript (TypeScript) library to get the latest browser versions and download links.

## Usage

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
