import { FirefoxChannel, Platform, VersionInfo } from './types.js';
import { getLastModified } from './utils.js';

const platformMap: Record<Platform, string> = {
  macos: 'osx',
  windows: 'win',
  linux: 'linux',
};

const channelMap: Record<FirefoxChannel, string> = {
  stable: 'firefox-latest-ssl',
  beta: 'firefox-beta-latest-ssl',
  dev: 'firefox-devedition-latest-ssl',
  nightly: 'firefox-nightly-latest-ssl',
};

async function fetchLatestFirefox(platform: Platform, channel: FirefoxChannel): Promise<VersionInfo<'firefox'>> {
  const url = `https://download.mozilla.org/?product=${channelMap[channel]}&os=${platformMap[platform]}&lang=en-US`;
  const response = await fetch(url, { redirect: 'manual' });
  const downloadLink = response.headers.get('location');
  if (!downloadLink) {
    throw new Error('Cannot get FireFox download link');
  }

  let version: string | undefined = '';
  if (channel === 'nightly') {
    // sample: https://download-installer.cdn.mozilla.net/pub/firefox/nightly/latest-mozilla-central/firefox-117.0a1.en-US.mac.dmg
    version = downloadLink.match(/\/firefox-(.*?)\.en-US/)?.[1];
  } else {
    // sample: https://download-installer.cdn.mozilla.net/pub/firefox/releases/116.0b6/mac/en-US/Firefox%20116.0b6.dmg
    version = downloadLink.match(/\/releases\/(.*?)\//)?.[1];
  }
  if (!version) {
    throw new Error('Cannot get FireFox version');
  }

  const releaseDate = await getLastModified(downloadLink);

  return {
    browser: 'firefox',
    channel: channel,
    platform: platform,
    downloadLink: downloadLink,
    releaseDate: releaseDate.toISOString(),
    version: version,
  };
}

export { fetchLatestFirefox };
