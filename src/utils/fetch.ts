import nodeFetch from 'node-fetch';
import { ProxyAgent } from 'proxy-agent';

const proxyAgent = new ProxyAgent();

const fetch: typeof nodeFetch = (url, init?) => {
  return nodeFetch(url, {
    ...init,
    agent: proxyAgent,
  });
};

export default fetch;
