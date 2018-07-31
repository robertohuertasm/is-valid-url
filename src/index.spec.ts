import { isUrl } from './';

describe('is-valid-url', () => {
  test('should return true if the url is valid', () => {
    expect(isUrl('http://github.com')).toBeTruthy();
  });

  test('should return false if the url is not valid', () => {
    expect(isUrl('my-fake-url:')).toBeFalsy();
  });
});
