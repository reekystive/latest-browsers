import { fetchLatest } from '@/index.js';
import { describe, it } from 'vitest';

describe.concurrent('fetch firefox macos', () => {
  it('macos stable', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'firefox', channel: 'stable', platform: 'macos' });
    // console.debug(info);
    expect(info.browser).toBe('firefox');
    expect(info.channel).toBe('stable');
    expect(info.platform).toBe('macos');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.dmg'));
  });

  it('macos beta', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'firefox', channel: 'beta', platform: 'macos' });
    // console.debug(info);
    expect(info.browser).toBe('firefox');
    expect(info.channel).toBe('beta');
    expect(info.platform).toBe('macos');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.dmg'));
  });

  it('macos dev', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'firefox', channel: 'dev', platform: 'macos' });
    // console.debug(info);
    expect(info.browser).toBe('firefox');
    expect(info.channel).toBe('dev');
    expect(info.platform).toBe('macos');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.dmg'));
  });

  it('macos nightly', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'firefox', channel: 'nightly', platform: 'macos' });
    // console.debug(info);
    expect(info.browser).toBe('firefox');
    expect(info.channel).toBe('nightly');
    expect(info.platform).toBe('macos');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.dmg'));
  });
});

describe.concurrent('fetch firefox windows', () => {
  it('windows stable', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'firefox', channel: 'stable', platform: 'windows' });
    // console.debug(info);
    expect(info.browser).toBe('firefox');
    expect(info.channel).toBe('stable');
    expect(info.platform).toBe('windows');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.exe'));
  });

  it('windows beta', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'firefox', channel: 'beta', platform: 'windows' });
    // console.debug(info);
    expect(info.browser).toBe('firefox');
    expect(info.channel).toBe('beta');
    expect(info.platform).toBe('windows');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.exe'));
  });

  it('windows dev', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'firefox', channel: 'dev', platform: 'windows' });
    // console.debug(info);
    expect(info.browser).toBe('firefox');
    expect(info.channel).toBe('dev');
    expect(info.platform).toBe('windows');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.exe'));
  });

  it('windows nightly', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'firefox', channel: 'nightly', platform: 'windows' });
    // console.debug(info);
    expect(info.browser).toBe('firefox');
    expect(info.channel).toBe('nightly');
    expect(info.platform).toBe('windows');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.exe'));
  });
});

describe.concurrent('fetch firefox linux', () => {
  it('linux stable', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'firefox', channel: 'stable', platform: 'linux' });
    // console.debug(info);
    expect(info.browser).toBe('firefox');
    expect(info.channel).toBe('stable');
    expect(info.platform).toBe('linux');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.tar.bz2'));
  });

  it('linux beta', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'firefox', channel: 'beta', platform: 'linux' });
    // console.debug(info);
    expect(info.browser).toBe('firefox');
    expect(info.channel).toBe('beta');
    expect(info.platform).toBe('linux');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.tar.bz2'));
  });

  it('linux dev', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'firefox', channel: 'dev', platform: 'linux' });
    // console.debug(info);
    expect(info.browser).toBe('firefox');
    expect(info.channel).toBe('dev');
    expect(info.platform).toBe('linux');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.tar.bz2'));
  });

  it('linux nightly', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'firefox', channel: 'nightly', platform: 'linux' });
    // console.debug(info);
    expect(info.browser).toBe('firefox');
    expect(info.channel).toBe('nightly');
    expect(info.platform).toBe('linux');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.tar.bz2'));
  });
});
