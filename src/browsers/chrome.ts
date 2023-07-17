import { ChromeChannel, Platform, VersionInfo } from './types.js';

const platformMap: Record<Platform, string> = {
  macos: 'Mac',
  windows: 'Windows',
  linux: 'Linux',
};

const channelMap: Record<ChromeChannel, string> = {
  stable: 'Stable',
  beta: 'Beta',
  dev: 'Dev',
  canary: 'Canary',
};

const downloadLinkMap: Record<Platform, Record<ChromeChannel, string>> = {
  macos: {
    stable: 'https://dl.google.com/chrome/mac/universal/stable/GGRO/googlechrome.dmg',
    beta: 'https://dl.google.com/chrome/mac/universal/beta/googlechromebeta.dmg',
    dev: 'https://dl.google.com/chrome/mac/universal/dev/googlechromedev.dmg',
    canary: 'https://dl.google.com/chrome/mac/universal/canary/googlechrome.dmg',
  },
  windows: {
    stable: 'https://dl.google.com/chrome/install/standalonesetup64.exe',
    beta: 'https://dl.google.com/chrome/install/dev/ChromeDevStandaloneSetup64.exe',
    dev: 'https://dl.google.com/chrome/install/beta/ChromeBetaStandaloneSetup64.exe',
    canary: 'https://dl.google.com/chrome/install/ChromeStandaloneSetup64.exe',
  },
  linux: {
    stable: 'https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb',
    beta: 'https://dl.google.com/linux/direct/google-chrome-beta_current_amd64.deb',
    dev: 'https://dl.google.com/linux/direct/google-chrome-unstable_current_amd64.deb',
    canary: 'https://dl.google.com/linux/direct/google-chrome-unstable_current_amd64.deb',
  },
};

async function fetchLatestChrome(platform: Platform, channel: ChromeChannel): Promise<VersionInfo<'chrome'>> {
  if (platform === 'linux' && channel === 'canary') {
    throw new Error('Chrome Canary is not available on Linux');
  }
  const url = `https://chromiumdash.appspot.com/fetch_releases?channel=${channelMap[channel]}&platform=${platformMap[platform]}&num=1&offset=0`;
  const response = await fetch(url);
  type Response = {
    channel: ChromeChannel;
    chromium_main_branch_position: number;
    hashes: Record<string, string>;
    milestone: number;
    platform: Platform;
    previous_version: string;
    time: number;
    version: string;
  };
  const json = (await response.json()) as Response[];
  const latest = json[0];
  return {
    browser: 'chrome',
    version: latest.version,
    channel: channel,
    downloadLink: downloadLinkMap[platform][channel],
    platform: platform,
    releaseDate: new Date(latest.time).toISOString(),
  };
}

export { fetchLatestChrome };
