# Internationalization

## Intro

Quarkd uses Chinese as the default language and supports multi-language switching. Please follow the tutorial below to set internationalization.

## Multi-language switch

Quarkd implements multi-language support through the Locale component, and you can use the Locale.use method to switch the currently used language.

```ts
import Locale, { zhCN } from "quarkd/lib/locale";

Locale.use(zhCN);
```

## Override language packs

The Locale.add method can be used to modify the text. Examples are as follows:

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

## Currently supported languages

| Languages           | File  | Version  |
| ------------------- | ----- | -------- |
| English             | en-US | `v1.0.0` |
| Simplified Chinese  | zh-CN | `v1.0.0` |
| Traditional Chinese | zh-TW | `v1.0.0` |
| Indonesian          | id-ID | `v1.0.0` |
| Thai                | th-TH | `v1.0.0` |

<br>
<br>

## Variables

View all language configs

```ts
// English Examples
export default {
  save: "Save",
  confirm: "Confirm",
  cancel: "Cancel",
  delete: "Delete",
  loading: "Loading...",
  placehold: "Please input content",
  image: {
    loadError: "Loaded error",
  },
  pullRefresh: {
    pulling: "Pull to refresh...",
    loosing: "Loose to refresh...",
  },
  search: {
    placeholder: "Please input keywords",
  },
  actionSheet: {
    shareTitle: "Share to",
  },
};
```

## How to internationalize business code?

This can be done using `i18n`.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

# Custom Themes

Quarkd provides a set of UI themes by default, while allowing new themes to be customized to a certain extent to meet the diverse visual needs of the business.

<div>
<br>
<img src="https://m.hellobike.com/resource/helloyun/13459/9FyYX_2.jpg?x-oss-process=image/quality,q_80" width="260" alt="quarkd Custom Themes">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://m.hellobike.com/resource/helloyun/13459/hrmSH_1.jpeg?x-oss-process=image/quality,q_80" width="260" alt="quarkd Custom Themes">
<br>
</div>

## Style Variable

Unlike some frameworks that use `less`, `sass` and other preprocessors, Quark uses `CSS`[custom properties](https://developer.mozilla.org/zh CN/docs/Web/CSS/Using_CSS_custom_properties) to achieve .
You just need to set the following variables in your project to modify theme styles:

```less
:root {
  --quark-theme-color: #0088ff;
  --quark-warning-color: #fb990f;
  --quark-danger-color: #ff5526;
  --quark-success-color: #07c160;
}
```

## Custom Themes

Set theme colors individually for components:

```less
quark-button {
  --quark-theme-color: #0088ff;
}
```

Set the theme color globally for all components:

```less
:root {
  --quark-theme-color: #0088ff;
}
```
