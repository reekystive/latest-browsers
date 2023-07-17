import { EdgeChannel, Platform, VersionInfo } from './types.js';
import { getLastModified } from './utils.js';

const linkMap: Record<Platform, Record<EdgeChannel, string>> = {
  macos: {
    stable: 'https://go.microsoft.com/fwlink/?linkid=2093504',
    beta: 'https://go.microsoft.com/fwlink/?linkid=2099618',
    dev: 'https://go.microsoft.com/fwlink/?linkid=2099619',
    canary: 'https://go.microsoft.com/fwlink/?linkid=2093293',
  },
  windows: {
    stable: 'https://go.microsoft.com/fwlink/?linkid=2108834&Channel=Stable&language=en&brand=M103',
    beta: 'https://go.microsoft.com/fwlink/?linkid=2100017&Channel=Beta&language=en&brand=M103',
    dev: 'https://go.microsoft.com/fwlink/?linkid=2084648&Channel=Dev&language=en&brand=M103',
    canary: 'https://go.microsoft.com/fwlink/?linkid=2084706&Channel=Canary&language=en&brand=M103',
  },
  linux: {
    stable: 'https://go.microsoft.com/fwlink/?linkid=2149051',
    beta: 'https://go.microsoft.com/fwlink/?linkid=2149139',
    dev: 'https://go.microsoft.com/fwlink/?linkid=2124602',
    canary: '',
  },
};

async function fetchWindows(channel: EdgeChannel): Promise<VersionInfo<'edge'>> {
  const url = 'https://www.microsoft.com/en-us/edge/business/download?form=MA13FJ';
  const response = await fetch(url);
  const body = await response.text();

  let raw = '' as string | undefined;
  if (channel === 'stable') {
    raw = body.match(/channelId:\w+[a-zA-Z0-9":\s.\-_,]+releases:(\[{.*?}\]}\])/s)?.[1];
  } else if (channel === 'beta') {
    raw = body.match(/channelId:"beta"[a-zA-Z0-9":\s.\-_,]+releases:(\[{.*?}\]}\])/s)?.[1];
  } else if (channel === 'dev') {
    raw = body.match(/channelId:"dev"[a-zA-Z0-9":\s.\-_,]+releases:(\[{.*?}\]}\])/s)?.[1];
  } else {
    throw new Error('Edge Canary for Windows is not implemented');
  }

  const DataParseError = new Error('Cannot parse Edge data');
  // convert js object to json
  const jsonStr = raw
    ?.replaceAll(/([{[,])([a-zA-Z0-9_-]+):/g, '$1"$2":')
    ?.replaceAll(/":([a-zA-Z_-]+)([,}])/g, '":"$1"$2\n');
  if (!jsonStr) {
    throw DataParseError;
  }
  type DataType = {
    fullVersion: string;
    policyUrl: string;
    platforms: {
      platformId: string;
      downloadUrl: string;
      sizeInBytes: number;
    }[];
  }[];
  const json = JSON.parse(jsonStr) as DataType;
  const latest = json[0];
  const latestPlatform = latest.platforms.filter((p) => p.downloadUrl.endsWith('X64.msi'))[0]; // also X86.msi, ARM64.msi
  const downloadLink = latestPlatform.downloadUrl;
  const releaseDate = await getLastModified(downloadLink);

  return {
    browser: 'edge',
    channel: channel,
    downloadLink: latestPlatform.downloadUrl,
    version: latest.fullVersion,
    releaseDate: releaseDate.toISOString(),
    platform: 'windows',
  };
}

async function fetchLatestEdge(platform: Platform, channel: EdgeChannel): Promise<VersionInfo<'edge'>> {
  if (platform === 'linux' && channel === 'canary') {
    throw new Error('Edge Canary is not available on Linux');
  }

  if (platform === 'windows') {
    return await fetchWindows(channel);
  }

  // const url = 'https://www.microsoft.com/en-us/edge/business/download?form=MA13FJ';
  const url = linkMap[platform][channel];
  const response = await fetch(url, { redirect: 'manual' });

  const downloadLink = response.headers.get('location');
  if (!downloadLink) {
    throw new Error('Cannot get Edge download link');
  }

  let version: string | undefined = '';
  if (platform === 'macos') {
    // sample: https://msedge.sf.dl.delivery.mp.microsoft.com/filestreamingservice/files/20295eef-e7d9-4f2c-87e5-e627f2067b85/MicrosoftEdgeDev-116.0.1938.16.pkg
    version = downloadLink.match(/\/MicrosoftEdge[a-zA-Z]*?-(.*?)\.pkg/)?.[1];
  } else if (platform === 'linux') {
    // sample: https://packages.microsoft.com/repos/edge/pool/main/m/microsoft-edge-dev/microsoft-edge-dev_116.0.1938.16-1_amd64.deb
    version = downloadLink.match(/\/microsoft-edge-[a-zA-Z]*?_(.*?)_amd64\.deb/)?.[1];
  }
  if (!version) {
    throw new Error('Cannot get Edge version');
  }

  const releaseDate = await getLastModified(downloadLink);

  return {
    browser: 'edge',
    channel: channel,
    platform: platform,
    downloadLink: downloadLink,
    releaseDate: releaseDate.toISOString(),
    version: version.replace(/-\d+$/, ''),
  };
}

export { fetchLatestEdge };
