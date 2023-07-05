# Button

### Intro

To trigger an operation.

### Install

```html
<script type="module">
  import 'quarkd/lib/button'
</script>
```

### Basic Usage

```html
<quark-button>Default</quark-button>
```

### Type

There are `primary`, `success`, `danger`, `warning` and default type.

```html
<quark-button>Default</quark-button>
<quark-button type="primary">Blue</quark-button>
<quark-button type="success">Green</quark-button>
<quark-button type="danger">Red</quark-button>
<quark-button type="warning">Yellow</quark-button>
<quark-button type="grey">Grey</quark-button>
```

### Plain

To set the button as a plain button, add `plain` prop to the Button. The plain button's text is the button color, and the background is white.

```html
<quark-button type="primary" plain>Primary</quark-button>
<quark-button type="success" plain>Success</quark-button>
```

### Light

To set the Button as a light Button, add `light` prop to the Button. The light Button's text is the Button color, and the background is the light color.

```html
<quark-button light type="primary">Primary</quark-button>
<quark-button light type="success">Success</quark-button>
```

### Size

Support `big`, `small`, the default is normal.

```html
<quark-button type="primary" size="small">Small</quark-button>
<quark-button type="primary" size="big">Big</quark-button>
<quark-button type="primary" size="large">Large</quark-button>
<quark-button type="primary">Normal</quark-button>
```

### Disabled

To mark a button as disabled, add `disabled` prop to the Button. The button cannot be clicked when disabled.

```html
<quark-button disabled type="danger">Disabled</quark-button>
<quark-button disabled plain type="primary">Disabled</quark-button>
```


JavaScript 操作 get、set
```js
btn.disabled;//获取
btn.disabled = false;
btn.disabled = true;

// 原生属性操作
btn.getAttribute('disabled');
btn.setAttribute('disabled', '');
btn.removeAttribute('disabled');
btn.toggleAttribute('disabled', [force]);
```

> 所有组件关于属性的获取和设置均类似写法：

```js
comp.props;//获取
comp.props = newProps;

//原生属性操作
comp.setAttribute('props',newProps);
comp.removeAttribute('props');
```

### Shape

A button shape can be added to a button by setting `shape` prop on the Button, which supports `round` and `square` buttons. The default is small rounded corners.

```html
<quark-button shape="square" type="danger">Square</quark-button>
<quark-button shape="round" type="primary">Round</quark-button>
```

### Loading

A loading indicator can be added to a button by setting `loading` prop on the Button. `loadingcolor` prop controls the loading color, `loadingsize` prop controls the loading size, and `loadingtype` prop controls the loading type. For loading, refer to the loading component.

```html
<quark-button loading type="danger" loadtype="circular"
  >Loading...</quark-button
>
<quark-button loading type="warning">Loading...</quark-button>
<quark-button @click="changeLoading" :loading="isLoading" type="success"
  >Click me!</quark-button
>
```
JavaScript操作get、set
```js
btn.loading;
btn.loading = false;
btn.loading = true;

//原生属性操作
btn.getAttribute('loading');
btn.setAttribute('loading', '');
btn.removeAttribute('loading');
btn.toggleAttribute('loading', [force]);
```

### Icon

Button components can contain an Icon. This is done by setting `icon` prop within the Button.

```html
<quark-button
  type="primary"
  icon="https://m.hellobike.com/resource/helloyun/16682/Agnve_tel%20(1).png"
  >Like</quark-button
>
```


```js
btn.icon = 'name';

//原生属性操作
btn.setAttribute('icon', 'icon-name');
```


## API

### Props

| Attribute    | Description                                                          | Type      | Default   |
| ------------ | -------------------------------------------------------------------- | --------- | --------- |
| type         | Button type，can be set to `primary`, `success`, `danger`, `warning` | `string`  | -         |
| size         | Button size，can be set to `small`, `normal`, `big`, `large`         | `string`  | `normal`  |
| disabled     | Whether to disable button                                            | `boolean` | `false`   |
| icon         | Icon on button (can be set to url link)                              | `string`  | -         |
| shape        | Button shape，can be set to `square`, `round`                        | `string`  | `round`   |
| plain        | Whether to be plain button                                           | `boolean` | `false `  |
| light        | Whether to be light Button                                           | `boolean` | `false `  |
| loading      | Whether to show loading status                                       | `boolean` | `false`   |
| loadtype     | Loading type，can be set to `circular`                               | `string`  | `spinner` |
| loadingcolor | Loading color                                                        | `string`  | `#fff`    |
| loadingsize  | Loading size                                                         | `string`  | `20`      |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles.

| Name                         | Description                      | Default Value |
| ---------------------------- | -------------------------------- | ------------- |
| `--button-height`            | Height of button                 | `32px`        |
| `--button-hspacing`          | Left and right padding of button | `12px`        |
| `--button-font-size`         | font size on button              | `14px`        |
| `--button-border-radius`     | Border-radius of button          | `8px`         |
| `--button-color`             | font color on button             | `#fff`        |
| `--button-icon-hspacing`     | icon margin right                | `6px`         |
| `--button-icon-size`         | icon size                        | `1em`         |
| `--button-big-border-radius` | Border-radius of big size button | `8px`         |
