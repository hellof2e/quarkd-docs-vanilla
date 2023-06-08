# 国际化

## 介绍

Quarkd 采用中文作为默认语言，同时支持多语言切换，请按照下方教程进行国际化设置。

## 多语言切换

Quarkd 通过 Locale 组件实现多语言支持，使用 Locale.use 方法可以切换当前使用的语言。

```ts
import Locale, { enUS } from "quarkd/lib/locale";
Locale.use(enUS);
```

## 覆盖语言包

通过 Locale.add 方法可以实现文案的修改，示例如下：

```ts
import Locale from "quarkd/lib/locale";

Locale.add({
  confirm: "Custom confirm",
  pullRefresh: {
    pulling: "Custom pull to refresh...",
    loosing: "Custom loose to refresh...",
  },
});
```

## 目前支持的语言

| 语言         | 文件名 | 版本     |
| ------------ | ------ | -------- |
| 英语         | en-US  | `v1.0.0` |
| 简体中文     | zh-CN  | `v1.0.0` |
| 繁體中文     | zh-TW  | `v1.0.0` |
| 印度尼西亚语 | id-ID  | `v1.0.0` |
| 泰语         | th-TH  | `v1.0.0` |

## 内置的变量

```ts
// 中文示例
export default {
  save: "保存",
  confirm: "确认",
  cancel: "取消",
  delete: "删除",
  loading: "加载中...",
  placehold: "请输入内容",
  image: {
    loadError: "加载失败",
  },
  pullRefresh: {
    pulling: "下拉即可刷新...",
    loosing: "释放即可刷新...",
  },
  search: {
    placeholder: "请输入搜索关键词",
  },
  actionSheet: {
    shareTitle: "分享到",
  },
};
```

## 业务代码如何实现国际化？

可以使用 `i18n` 来实现。

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

# 主题定制

Quarkd 默认提供一套 UI 主题，同时允许在一定程度上定制新的主题，以满足业务的多样化视觉需求。

<div>
<br>
<img src="https://m.hellobike.com/resource/helloyun/13459/9FyYX_2.jpg?x-oss-process=image/quality,q_80" width="260" alt="quark 主题定制">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://m.hellobike.com/resource/helloyun/13459/hrmSH_1.jpeg?x-oss-process=image/quality,q_80" width="260" alt="quark 主题定制">
<br>
</div>

## 样式变量

不同于一些框架采用`less`、`sass`等预处理器， Quarkd 采用 `CSS`[自定义属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 实现。

您只需要在您的项目中设置以下变量即可轻松修改主题样式：

```less
:root {
  --quark-theme-color: #0088ff;
  --quark-warning-color: #fb990f;
  --quark-danger-color: #ff5526;
  --quark-success-color: #07c160;
}
```

## 定制主题

为组件单独设置主题色：

```less
quark-button {
  --quark-theme-color: #0088ff;
}
```

全局为所有组件设置主题色：

```less
:root {
  --quark-theme-color: #0088ff;
}
```
