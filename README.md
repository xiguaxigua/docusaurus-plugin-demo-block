# docusaurus-plugin-demo-block
> Use code blocks as usual and get better rendering

![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/xiguaxigua/docusaurus-plugin-demo-block/build/master)
![npm](https://img.shields.io/npm/v/docusaurus-plugin-demo-block)
![npm](https://img.shields.io/npm/dw/docusaurus-plugin-demo-block)
![GitHub top language](https://img.shields.io/github/languages/top/xiguaxigua/docusaurus-plugin-demo-block)
![GitHub](https://img.shields.io/github/license/xiguaxigua/docusaurus-plugin-demo-block)

## Install

```
npm i docusaurus-plugin-demo-block
```

## Quick Start

```js
  plugins: [
    [
      'demo-block',
      /** @type {import('./lib/option-type').Options} */
      ({}),
    ],
  ],
```

## Example

![vanilla](./assets/vanilla.jpg)
![vue](./assets/vue.jpg)
![react](./assets/react.jpg)

## Config

you can look this [config](./src/types/option-type.d.ts) file to find which config is supported

### global config

```js
  plugins: [
    [
      'demo-block',
      /** @type {import('./lib/option-type').Options} */
      ({ babel: false }),
    ],
  ],
```

### local config

```
\```html vanilla babel=false
<template>
  <div id="box">box</div>
</template>

<style>
  #box {
    border: 1px solid red;
  }
</style>

<script>
var box = document.getElementById('box');
</script>

\```
```

## Docs

https://xiguaxigua.com/docusaurus-plugin-demo-block

## Contributing

[Contributing](./CONTRIBUTING.md)

## License

[MIT](./LICENSE)