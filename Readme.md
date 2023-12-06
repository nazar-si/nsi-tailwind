# Nazar Si tailwind presets
This package contains several style presets for tailwind in a form:

```
colors: 
    primary
    secondary
    error
    gray
font:
    sans (default font)
borderRadius
```

For now there are following styles:
* Official (tailwind site)
* Nazar - personal theme 
* Strict - for business 
* Starbucks
* Vercel

# Usage

To use them, in your `tailwind.config.js` import style and set it as preset:
```js
const {presets} = require('nsi-tailwind');

module.exports = {
    presets: [presets.strict], // [presets.starbucks], etc.
    ...
} 
```
or use required options in your theme config
```js
const {presets} = require('nsi-tailwind');

module.exports = {
    ...
    theme: {
        extend: {
            ...
            primary: presets.official.theme.colors.primary,
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

For colors there is always a default option that corresponds for 500 brightness:
```css 
text-primary // equivalent to text-primary-500
bg-secondary // equivalent to bg-secondary-500
...
```