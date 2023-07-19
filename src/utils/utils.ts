import fetch from './fetch.js';

export async function getLastModified(url: string): Promise<Date> {
  const abortController = new AbortController();
  const signal = abortController.signal;
  const response = await fetch(url, { signal })
    .then((res) => {
      abortController.abort();
      return res;
    })
    .catch((err) => {
      console.log(err);
    });

  const CannotGetLastModifiedDateError = new Error('Cannot get last modified date');
  if (!response) {
    throw CannotGetLastModifiedDateError;
  }
  const lastModified = response.headers.get('last-modified');
  if (!lastModified) {
    throw CannotGetLastModifiedDateError;
  }
  return new Date(lastModified);
}
