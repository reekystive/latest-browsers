export type Browser = 'chrome' | 'firefox' | 'edge';
export type Platform = 'macos' | 'windows' | 'linux';

export type ChromeChannel = 'stable' | 'beta' | 'dev' | 'canary';
export type FirefoxChannel = 'stable' | 'beta' | 'dev' | 'nightly';
export type EdgeChannel = 'stable' | 'beta' | 'dev' | 'canary';

type ChannelMap = {
  chrome: ChromeChannel;
  firefox: FirefoxChannel;
  edge: EdgeChannel;
};

export type Channel<T extends Browser> = T extends keyof ChannelMap ? ChannelMap[T] : never;

export interface VersionInfo<T extends Browser> {
  browser: Browser;
  channel: Channel<T>;
  platform: Platform;
  version: string;
  releaseDate: string;
  downloadLink: string;
}
