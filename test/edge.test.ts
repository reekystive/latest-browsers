import { fetchLatest } from '@/index.js';
import { describe, it } from 'vitest';

describe.concurrent('fetch edge macos', () => {
  it('macos stable', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'edge', channel: 'stable', platform: 'macos' });
    // console.debug(info);
    expect(info.browser).toBe('edge');
    expect(info.channel).toBe('stable');
    expect(info.platform).toBe('macos');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.pkg'));
  });

  it('macos beta', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'edge', channel: 'beta', platform: 'macos' });
    // console.debug(info);
    expect(info.browser).toBe('edge');
    expect(info.channel).toBe('beta');
    expect(info.platform).toBe('macos');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.pkg'));
  });

  it('macos dev', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'edge', channel: 'dev', platform: 'macos' });
    // console.debug(info);
    expect(info.browser).toBe('edge');
    expect(info.channel).toBe('dev');
    expect(info.platform).toBe('macos');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.pkg'));
  });

  it('macos canary', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'edge', channel: 'canary', platform: 'macos' });
    // console.debug(info);
    expect(info.browser).toBe('edge');
    expect(info.channel).toBe('canary');
    expect(info.platform).toBe('macos');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.pkg'));
  });
});

describe.concurrent('fetch edge windows', () => {
  it('windows stable', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'edge', channel: 'stable', platform: 'windows' });
    // console.debug(info);
    expect(info.browser).toBe('edge');
    expect(info.channel).toBe('stable');
    expect(info.platform).toBe('windows');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.msi'));
  });

  it('windows beta', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'edge', channel: 'beta', platform: 'windows' });
    // console.debug(info);
    expect(info.browser).toBe('edge');
    expect(info.channel).toBe('beta');
    expect(info.platform).toBe('windows');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.msi'));
  });

  it('windows dev', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'edge', channel: 'dev', platform: 'windows' });
    // console.debug(info);
    expect(info.browser).toBe('edge');
    expect(info.channel).toBe('dev');
    expect(info.platform).toBe('windows');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.msi'));
  });

  it('windows canary', async ({ expect }) => {
    await expect(fetchLatest({ browser: 'edge', channel: 'canary', platform: 'windows' })).rejects.toThrowError(
      /^Edge Canary for Windows is not implemented$/
    );
  });
});

describe.concurrent('fetch edge linux', () => {
  it('linux stable', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'edge', channel: 'stable', platform: 'linux' });
    // console.debug(info);
    expect(info.browser).toBe('edge');
    expect(info.channel).toBe('stable');
    expect(info.platform).toBe('linux');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.deb'));
  });

  it('linux beta', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'edge', channel: 'beta', platform: 'linux' });
    // console.debug(info);
    expect(info.browser).toBe('edge');
    expect(info.channel).toBe('beta');
    expect(info.platform).toBe('linux');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.deb'));
  });

  it('linux dev', async ({ expect }) => {
    const info = await fetchLatest({ browser: 'edge', channel: 'dev', platform: 'linux' });
    // console.debug(info);
    expect(info.browser).toBe('edge');
    expect(info.channel).toBe('dev');
    expect(info.platform).toBe('linux');
    expect(info.version).toBeTruthy();
    expect(info.releaseDate).toBeTruthy();
    expect(info.downloadLink).toSatisfy((s: string) => s.startsWith('https://') && s.endsWith('.deb'));
  });

  it('linux canary', async ({ expect }) => {
    await expect(fetchLatest({ browser: 'edge', channel: 'canary', platform: 'linux' })).rejects.toThrowError(
      /^Edge Canary is not available on Linux$/
    );
  });
});
