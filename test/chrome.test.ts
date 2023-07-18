import { fetchLatest } from '@/index.js';
import { describe, it } from 'vitest';

describe.concurrent('fetch chrome macos', () => {
  it('macos stable', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'chrome', channel: 'stable', platform: 'macos' });
    // console.debug(info);
    expect(info.browser).toBe('chrome');
    expect(info.channel).toBe('stable');
    expect(info.platform).toBe('macos');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.dmg'));
  });

  it('macos beta', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'chrome', channel: 'beta', platform: 'macos' });
    // console.debug(info);
    expect(info.browser).toBe('chrome');
    expect(info.channel).toBe('beta');
    expect(info.platform).toBe('macos');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.dmg'));
  });

  it('macos dev', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'chrome', channel: 'dev', platform: 'macos' });
    // console.debug(info);
    expect(info.browser).toBe('chrome');
    expect(info.channel).toBe('dev');
    expect(info.platform).toBe('macos');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.dmg'));
  });

  it('macos canary', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'chrome', channel: 'canary', platform: 'macos' });
    // console.debug(info);
    expect(info.browser).toBe('chrome');
    expect(info.channel).toBe('canary');
    expect(info.platform).toBe('macos');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.dmg'));
  });
});

describe.concurrent('fetch chrome windows', () => {
  it('windows stable', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'chrome', channel: 'stable', platform: 'windows' });
    // console.debug(info);
    expect(info.browser).toBe('chrome');
    expect(info.channel).toBe('stable');
    expect(info.platform).toBe('windows');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.exe'));
  });

  it('windows beta', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'chrome', channel: 'beta', platform: 'windows' });
    // console.debug(info);
    expect(info.browser).toBe('chrome');
    expect(info.channel).toBe('beta');
    expect(info.platform).toBe('windows');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.exe'));
  });

  it('windows dev', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'chrome', channel: 'dev', platform: 'windows' });
    // console.debug(info);
    expect(info.browser).toBe('chrome');
    expect(info.channel).toBe('dev');
    expect(info.platform).toBe('windows');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.exe'));
  });

  it('windows canary', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'chrome', channel: 'canary', platform: 'windows' });
    // console.debug(info);
    expect(info.browser).toBe('chrome');
    expect(info.channel).toBe('canary');
    expect(info.platform).toBe('windows');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.exe'));
  });
});

describe.concurrent('fetch chrome linux', () => {
  it('linux stable', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'chrome', channel: 'stable', platform: 'linux' });
    // console.debug(info);
    expect(info.browser).toBe('chrome');
    expect(info.channel).toBe('stable');
    expect(info.platform).toBe('linux');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.deb'));
  });

  it('linux beta', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'chrome', channel: 'beta', platform: 'linux' });
    // console.debug(info);
    expect(info.browser).toBe('chrome');
    expect(info.channel).toBe('beta');
    expect(info.platform).toBe('linux');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.deb'));
  });

  it('linux dev', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'chrome', channel: 'dev', platform: 'linux' });
    // console.debug(info);
    expect(info.browser).toBe('chrome');
    expect(info.channel).toBe('dev');
    expect(info.platform).toBe('linux');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.deb'));
  });

  it('linux canary', async ({ expect }) => {
    await expect(fetchLatest({ browser: 'chrome', channel: 'canary', platform: 'linux' })).rejects.toThrowError(
      /^Chrome Canary is not available on Linux$/
    );
  });
});
