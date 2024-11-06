> :warning: Deprecation: This configuration package is no longer supported with eslint v9 or later.
> After migrating all of my projects depending on this to eslint@v9, this project is going to be archived.

> Note: this package is mainly for my own use, but it might be useful if you use as needed

# @mtripg6666tdr/eslint-config
Sharable eslint config, mainly for my own use.

## Installation
```bash
npm i eslint @mtripg6666tdr/eslint-config --save-dev
```

If you use `@mtripg6666tdr/eslint-config/nextjs-typescript`, then you also have to install `eslint-config-next`.
```bash
npm i eslint @mtripg6666tdr/eslint-config eslint-config-next --save-dev
```

## Configurations
### `@mtripg6666tdr/eslint-config/base`
Base config for plain JavaScript.

- Hierarchy: `base`

### `@mtripg6666tdr/eslint-config/nodejs`
Config for plain JavaScript on Node.js

- Hierarchy: `base` -> `nodejs`

### `@mtripg6666tdr/eslint-config/browser`
Config for plain JavaScript that will be bundled and running on browser.

- Hierarchy: `base` -> `browser`

### `@mtripg6666tdr/eslint-config/typescript`
Base config for TypeScript transpiled and running on Node.js

- Hierarchy: `base` -> `typescript`

### `@mtripg6666tdr/eslint-config/nodejs-typescript`
Config for Typescript on Node.js

- Hierarchy: `base` -> `typescript` -> `nodejs-typescript`

### `@mtripg6666tdr/eslint-config/browser-typescript`
Config for TypeScript transpiled and running on Browser

- Hierarchy: `base` -> `typescript` -> `browser-typescript`

### `@mtripg6666tdr/eslint-config/react-typescript`
Config for TypeScript with React JSX (TSX) support.

- Hierarchy: `base` -> `typescript` -> `browser-typescript` -> `react-typescript`

### `@mtripg6666tdr/eslint-config/nextjs-typescript`
Config for TypeScript with React JSX (TSX) on Next.js framework support.

- Hierarchy: [`next`](https://www.npmjs.com/package/eslint-config-next) + `typescript` (merging only rules configuration) -> `nextjs-typescript`

### Quick Guide
|       |JavaScript|TypeScript          |
|:-----:|:--------:|:------------------:|
|Node.js|`nodejs`  |`nodejs-typescript` |
|Browser|`browser` |`browser-typescript`|
|React  |-         |`react-typescript`  |
|Next.js|-         |`nextjs-typescript` |

## License
[MIT](./LICENSE)
