# 快速上手

## 预览

> 扫描下方二维码体验，体验 Quark 组件库示例

<img src="https://m.hellobike.com/resource/helloyun/15697/3_81B_qrcode_quark-design.hellobike.com.png?x-oss-process=image/quality,q_80" width="200" alt="qr.png">

## CDN

使用 Quarkd 最简单的方式是直接在 HTML 文件中引入 CDN 链接，之后你可以全局中任意使用。由于 quark 做到了 CSS-IN-JS，因此您只需加载下面链接即可！

> CDN 体积只有 80kb，超乎你想象！（远小于其它第三方组件库体积）

```
<script src="https://fastly.jsdelivr.net/npm/quarkd@latest/umd/index.js" />
```

## 通过 NPM 安装

在现有项目中使用 Quark Design 时，可以通过 `npm` 进行安装：

```bash
npm i quarkd
```

## 按需引入(推荐)

```js
import "quarkd/lib/${Component Name}"
```

## 全量引入
```js
import "quarkd/lib"
```

## 使用示例

```tsx
<template>
  <div>
    <quark-button type="primary" @click="handleClick">按钮</quark-button>;
  </div>
</template>
<script>
  import "quarkd/lib/button";
</script>
```

## Polyfill

> Quarkd(Web components) 支持现代浏览器，如需兼容更低版本（ iOS 10 以下，Android 7 以下），请在 HTML 头部加入 polyfill。

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@^2/"></script>
```

更多详情，参考官方 Polyfill [点击查看更多](https://www.webcomponents.org/polyfills)。


