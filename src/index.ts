import urlRegex from 'url-regex';

const rex = urlRegex({ exact: true });

export function isUrl(url: string): boolean {
  if (typeof url !== 'string') {
    throw new TypeError('Expected a string');
  }
  return rex.test(url.trim());
}
