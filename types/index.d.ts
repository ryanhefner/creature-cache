// TypeScript Version: 3.5

export interface CacheProps {
  [key: string]: any;
}

export default class Cache {
  constructor(cache: CacheProps);

  clear(): Cache;

  extract(): CacheProps;

  has(key: string): boolean;

  read(key: string): any;

  restore(cache: CacheProps | string | null): Cache;

  write(key: string, value: any): Cache;
}
