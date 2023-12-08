# [Nazar Si tailwind presets](https://github.com/nazar-si/nsi-tailwind)
This package contains several style presets for tailwind. Different presets contain different classes and styles to use.

For now there are following styles:
* **Gradual** - all colors have ranges from 100 to 900 and 50, 950. `primary`, `secondary`, `error` and `gray` colors are present.
  * **Official** - tailwind site
  * **Nazar** - personal theme 
  * **Strict** - for business 
  * **Starbucks** - starbucks brand colors
  * **Vercel** - Vercel-like black and white theme
  * **Meta (TBA)** - Meta (aka. Facebook) styles  
* **Special** - some special famous packs (*In progress*):
  * **Minimalist** - themes of several colors 
  * **Daisy UI (TBA)** - default themes from Daisy Ui
  * **Apple (TBA)** - styles commonly used in Apple IOS and MacOS themes
  * **Windows (TBA)** -  styles commonly used in Windows 11 

# Usage

To use them, in your `tailwind.config.js` import style and set it as preset:
```js
const {gradual} = require('nsi-tailwind');

module.exports = {
    presets: [gradual.strict], // [gradual.starbucks], etc.
    ...
} 
```
or use required options in your theme config
```js
const {gradual} = require('nsi-tailwind');

module.exports = {
    ...
    theme: {
        extend: {
            ...
            primary: gradual.official.theme.colors.primary,
        },
    },
} 
```

In order to use your colors in UI, use them as you would do with ordinary tailwind:
```html
<div class='text-primary-500'>
    Content
</div>
```

# Theme descriptions 

## Gradual 
In all color packs there are four colors with all variants of brightness (from 50 to 950):
```
primary
secondary
error
gray
```

## Special 
TBA
