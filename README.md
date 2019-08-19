# 🧟‍♂️ creature-cache

[![npm version](https://badge.fury.io/js/creature-cache.svg)](https://badge.fury.io/js/creature-cache)
[![npm](https://img.shields.io/npm/l/express.svg)](LICENSE)
[![Coverage Status](https://coveralls.io/repos/github/ryanhefner/creature-cache/badge.svg?branch=master)](https://coveralls.io/github/ryanhefner/creature-cache?branch=master)
[![CircleCI](https://circleci.com/gh/ryanhefner/creature-cache.svg?style=shield)](https://circleci.com/gh/ryanhefner/creature-cache)
[![Greenkeeper badge](https://badges.greenkeeper.io/ryanhefner/creature-cache.svg)](https://greenkeeper.io/)

An in-memory cache that can be restored/rehydrated (brought back to life) via a string or array to rebuild
the cache Map.

This is particularly handy for frameworks that can generate a cache
server-side, and would want to reflect that same cache client-side. For example,
anything built in [Next](https://nextjs.com) or [React](https://reactjs.org) that
is rendered server-side.

I realized I was using the same/similar cache instance in [`react-contentful`](https://github.com/ryanhefner/creature-cache),
[`react-request-block`](https://github.com/ryanhefner/react-request-block), and
a new package that I am currently writing, so it just made sense to make this its
own package.

## Install

Via [npm](https://npmjs.com/package/creature-cache)

```sh
npm install --save creature-cache
```

Via [Yarn](https://yarn.fyi/creature-cache)

```sh
yarn add creature-cache
```

## How to use

There really isn’t anything too magical about this package. Just a `Map` instance
with a bit of an interface around it to handle initializing, accessing and extracting
the current cached values.

### Initialization

Intializing a new `creature-cache` instance is pretty straight forward. Just create
your new instance, and optionally include a `cache` value to rehydrate the cache with.

The `cache` can be an `Array`, `Object`, or a `string` that can converted back into
an object. Internally, this package uses [`flatted`](https://github.com/WebReflection/flatted)
to parse the string and build the internal `Map` instance.

```js
import Cache from 'creature-cache';

const cache = new Cache();

... [go nuts]

```

### Methods

* `clear(): Cache` - Clear the internal cache `Map` and return a reference back to `Cache` instance so methods can be chained.

* `extract(): Array` - Extract the internal cache `Map` as an array.

* `has(key): boolean` - Check to see if the cache has an instance for the `key` provided.

* `read(key): any` - Read the cached value associated to the provided `key`.

* `restore(cache): Cache` - In the event you want to restore a cache after an instance has been initialized, call this.

* `write(key, value): Cache` - Write a cache value to the associated key.

## License

[MIT](LICENSE) © [Ryan Hefner](https://www.ryanhefner.com)
