import { Browser, Channel, Platform, VersionInfo } from './types.js';
import { fetchLatestChrome } from './chrome.js';
import { fetchLatestFirefox } from './firefox.js';
import { fetchLatestEdge } from './edge.js';

type BrowserOption<B extends Browser = Browser> = {
  browser: B;
  channel: Channel<B>;
  platform: Platform;
};

async function fetchLatest(option: BrowserOption<'chrome'>): Promise<VersionInfo<'chrome'>>;
async function fetchLatest(option: BrowserOption<'firefox'>): Promise<VersionInfo<'firefox'>>;
async function fetchLatest(option: BrowserOption<'edge'>): Promise<VersionInfo<'edge'>>;

async function fetchLatest(option: BrowserOption<'chrome'> | BrowserOption<'firefox'> | BrowserOption<'edge'>) {
  const browser = option.browser;
  const platform = option.platform;
  if (browser === 'chrome') {
    const channel = option.channel;
    return await fetchLatestChrome(platform, channel);
  }
  if (browser === 'firefox') {
    const channel = option.channel;
    return await fetchLatestFirefox(platform, channel);
  }
  const channel = option.channel;
  return await fetchLatestEdge(platform, channel);
}

export { fetchLatest };
