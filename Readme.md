# Nazar Si tailwind presets
## [Github page](https://github.com/nazar-si/nsi-tailwind)
This package contains several style presets for tailwind. Different presets contain different classes and styles to use.

For now there are following styles:
* **Gradual** - all colors have ranges from 100 to 900 and 50, 950. `primary`, `secondary`, `error` and `gray` colors are present.
  * **Official** - tailwind site
  * **Nazar** - personal theme 
  * **Strict** - for business 
  * **Starbucks** - starbucks brand colors
  * **Vercel** - Vercel-like black and white theme
  * **Tropical** - Theme with warm colors
  * **Meta (TBA)** - Meta (aka. Facebook) styles  
* **Special** - some special famous packs (*In progress*):
  * **Minimalist (21 themes)** - themes of several colors 
  * **Daisy UI (TBA)** - default themes from Daisy Ui
  * **Apple (TBA)** - styles commonly used in Apple IOS and MacOS themes
  * **Windows (TBA)** -  styles commonly used in Windows 11 

# Usage

To use them, in your `tailwind.config.js` import style and set it as preset:
```js
const {gradual, special} = require('nsi-tailwind');

module.exports = {
    presets: [gradual.strict], // [gradual.starbucks], [special.minimalist.orwell] etc.
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

![Gradual palettes](https://github.com/nazar-si/nsi-tailwind/blob/main/release/colorsGradual.svg)

## Special 

### Minimalist

```ts
export {special} from 'nsi-tailwind';

module.exports = {
    presets: [special.minimalist.superuser], 
    ...
}


```
These theme contains only 6 colors:
* back - background 
* fore - foreground
* main - main color 
* sub - secondary color
* extra - extra/accent color
* error - error color

Each color may be used in class. For example:
```html
<div class='bg-back'>
    <p class='text-fore'>
        Hello, <span class='text-main'>World</span>!
    <p>
</div>
```

Also for `main`, `sub` and `extra` colors their brighter and darker variants are available. For colors towards background brightness there are:
```css
...-main-back and ...-main-fore
...-sub-back and ...-sub-fore
...-extra-back and ...-extra-fore
```
And for foreground there are also `-200` and `-100` variants. For example: 
```html
<div class='bg-back-100'>
    <p class='text-fore-200'>
        Hello, <span class='text-main-back'>World</span>!
    <p>
</div>
```
To sum up, all the classes in each minimalist theme are:
```yaml
main main-back main-fore
sub sub-back sub-fore
extra extra-back extra-fore
back back-100 back-200
fore fore-100 fore-200
error
```

![Minimalist palettes](https://github.com/nazar-si/nsi-tailwind/blob/main/release/colorsMinimalist.svg)