# ActionSheet

### Intro

The pop-up modal panel at the bottom contains multiple options related to the current situation.

### Install

```html
<!-- Import -->
<script type="module">
import ActionSheet from "quarkd/lib/action-sheet";
</script>
```
### Basic Usage


```js
ActionSheet({
  actions: [
    { name: "Option 1" },
    { name: "Option 2" },
    { name: "Option 3" },
  ],
  select: (index, action) => {},
  cancel: () => {},
  close: () => {},
})
```

### Show Title

```js
ActionSheet({
  title: "我是标题信息",
  actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }],
  select: (index, action) => {},
  cancel: () => {},
  close: () => {},
});
```

### Show Cancel Button

```js
ActionSheet({
  title: "我是标题信息",
  cancelText: "取消",
  actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }],
  select: (index, action) => {},
  cancel: () => {},
  close: () => {},
});
```

### Custom Title Style

```js
ActionSheet({
  title: "我是标题信息",
  titleColor: "red",
  titleFontSize: 20,
  actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }],
  select: (index, action) => {},
  cancel: () => {},
  close: () => {},
});
```

### Custom Options Style

```js
ActionSheet({
  title: "我是标题信息",
  titleColor: "red",
  titleFontSize: 20,
  actions: [
    { name: "选项一", color: "#999", fontSize: 20 },
    { name: "选项二" },
    { name: "选项三" },
  ],
  select: (index, action) => {},
  cancel: () => {},
  close: () => {},
});
```

### Custom Cancel Button Style

```js
ActionSheet({
  title: "我是标题信息",
  cancelText: "取消",
  cancelTextColor: "red",
  cancelTextFontSize: 20,
  actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }],
  select: (index, action) => {},
  cancel: () => {},
  close: () => {},
});
```


## API

### Props

| Attribute          | Description                  | Type                                      | Default   |
| ------------------ | ---------------------------- | ----------------------------------------- | --------- |
| title              | Title                        | `string`                                  |           |
| actions            | Options                      | `Action []`                               | `require` |
| cancelText         | Text of cancel button        | `string `                                 |
| titleColor         | Title color                  | `string `                                 | `#969799` |
| titleFontSize      | Title font size              | `number `                                 | `14`      |
| cancelTextColor    | Text color of cancel button  | `string `                                 | `#646566` |
| cancelTextFontSize | Font size of cancel button   | `number`                                  | `16`      |
| zIndex             | actionsheet z-index          | `number `                                 | `999`     |
| select             | Selected callback            | `(index: number, action: Action) => void` |           |
| cancel             | Cancel button click callback | `() => void `                             |           |
| close              | Mask click callback          | `() => void`                              |           |

### Data Structure of Action

```js
type Action = {
  name: string,
  color?: string,
  fontSize?: number,
};

type ActionParams = {
  title?: string,
  actions: Action[],
  cancelText?: string,
  titleColor?: string,
  titleFontSize?: number,
  cancelTextColor?: string,
  cancelTextFontSize?: number,
  select: (index: number, action: Action) => void,
  cancel?: () => void,
  close?: () => void,
  zIndex?: number,
};
```
