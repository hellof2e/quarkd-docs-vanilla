
# Quark Design

Quarkd （Quark Design缩写）是一套基于 `Web Components` 的跨框架 UI 组件库，输出标准的 `Custom Element`。

所有组件可以同时在 `React、Vue、Preact、Angular` 或原生 JS 等任意框架或无框架中使用。

<br/>

不同于“主流其它的组件库”，Quarkd 没有在“前人”组件建设能力上做复制/粘贴，我们有自己的思考，移除了一些不必要或者我们认为不合理的设计点，同时减轻了代码量/代码逻辑。让这个组件库变得更轻盈，贴近原生（设计上也是）。

<div style="margin:30px 0;"><img src="https://m.hellobike.com/resource/helloyun/13459/Z_3qI_quarkd-dark.png?x-oss-process=image/quality,q_80" width="300" /></div>


> 使用 quarkd 前，推荐先学习官方的 [Web Components 概念和使用](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components)。
组件库默认开启 [Shadow DOM](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM)，使用 W3C 原生的插槽 [slot](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/slot) 和自定义事件 [Custom Events](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent) 能力。


## 特性

- **支持 Vue、React、Angular 等各类框架/无框架**
- **完全覆盖您所需要的各种通用组件**
- 支持按需引用
- 详尽的文档和示例
- 单元测试覆盖
- 支持 TypeScript
- 支持定制主题

## 示例 H5

<img src="https://m.hellobike.com/resource/helloyun/15697/3_81B_qrcode_quark-design.hellobike.com.png?x-oss-process=image/quality,q_80" width="200" />

## 支持环境

> 如需兼容更低版本，请使用官方 [Polyfills][def]

- Android 7.0+
- iOS 10.2+

## 构建版本

> AMD 环境、Webpack、Vite 等构建工具环境、服务端建议使用 es 版，非模块化环境（如通过 `<script>` 标签直接引用）建议使用 umd 压缩版。

- es
- umd


<!-- ## 缘何此名

物理学科名词，夸克（英语：Quark）意译为层子，是一种基本粒子，也是构成物质的基本单元。夸克互相结合，形成一种复合粒子，叫强子，它们是构成原子核的单元。

对于 Web 开发者来说，UI 组件是构建页面可复用代码的最小单元（可交互、可复用、跨技术栈的最小单元），它能像原生标签一样运行在各种框架或无框架的应用中。因此我们将它命名为 Quark！ -->

## 开源协议

本项目基于 MIT 协议

[def]: https://www.webcomponents.org/polyfills
