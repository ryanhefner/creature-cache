import Flatted from 'flatted/cjs';

import Cache from './';

describe('Cache', () => {
  test('initialization - empty', () => {
    const cache = new Cache();

    expect(cache.cache.size).toBe(0);
  });

  test('initialization w/ array', () => {
    const cache = new Cache([[1, 'some'], [2, 'value']]);

    expect(cache.cache.size).toBe(2);
    expect(cache.read(1)).toBe('some');
    expect(cache.read(2)).toBe('value');
  });

  test('initialization w/ object', () => {
    const cache = new Cache({ 1: 'some', 2: 'value' });

    expect(cache.cache.size).toBe(2);
    expect(cache.read('1')).toBe('some');
    expect(cache.read('2')).toBe('value');
  });

  test('initailization w/ string', () => {
    const string = Flatted.stringify([[1, 'some'], [2, 'value']]);
    const cache = new Cache(string);

    expect(cache.cache.size).toBe(2);
    expect(cache.read(1)).toBe('some');
    expect(cache.read(2)).toBe('value');
  });

  test('clear', () => {
    const cache = new Cache([[1, 'some'], [2, 'value']]);

    expect(cache.cache.size).toBe(2);

    cache.clear();

    expect(cache.cache.size).toBe(0);
  });

  test('extract', () => {
    const cache = new Cache([[1, 'some'], [2, 'value']]);

    cache.write(3, 'other');

    expect(cache.cache.size).toBe(3);

    const extract = cache.extract();

    expect(extract).toStrictEqual([[1, "some"], [2, "value"], [3, "other"]]);
  });

  test('has', () => {
    const cache = new Cache([[1, 'some'], [2, 'value']]);

    expect(cache.cache.size).toBe(2);
    expect(cache.has(2)).toBe(true);
  });

  test('read', () => {
    const cache = new Cache([[1, 'some'], [2, 'value']]);

    expect(cache.cache.size).toBe(2);
    expect(cache.read(2)).toBe('value');
  });

  test('write', () => {
    const cache = new Cache([[1, 'some'], [2, 'value']]);

    expect(cache.cache.size).toBe(2);

    cache.write(3, 'other');

    expect(cache.cache.size).toBe(3);
    expect(cache.read(3)).toBe('other');
  });

  test('restore', () => {
    const cache = new Cache();
    const testCache = new Cache([[1, 'some'], [2, 'value']]);

    const string = Flatted.stringify([[1, 'some'], [2, 'value']]);

    cache.restore(string);

    expect(testCache.extract()).toStrictEqual(cache.extract());
  });
});
