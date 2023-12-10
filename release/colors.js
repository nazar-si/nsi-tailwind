const fs = require('fs');
const {special} = require('../dist/main.cjs.js')
const palettes = special.minimalist;
let canvas = require('canvas'),
    jsdom = require('jsdom'),
    C2S = require('canvas2svg');

let document = new jsdom.jsdom();
let XMLSerializer = require('xmlserializer');
global = document
global.XMLSerializer = XMLSerializer


function minimalist(palette, name) {
    return `\t<div>
        ${name}
        <div class='back' style='background: ${palette.back}'>
            <div class='color' style='background: ${palette.main}'></div>
            <div class='color' style='background: ${palette.sub}'></div>
            <div class='color' style='background: ${palette.fore}'></div>
        </div>
    </div>`
}

let data = fs.readFileSync('./Readme.md').toString();

function processMinimalist(data) {
    const startTag = '<main class="minimalist">'
    const endTag = '</main>'

    let ctx = new C2S({document: document, width: 500, height: Math.ceil((Object.keys(palettes).length - 1)/ 3) * 70});
    
    Object.keys(palettes).forEach((key, i) => {
        const palette = palettes[key].theme.colors;
        if (key === '_template_') return;
        let x = i % 3;
        let y = (i - x) / 3;
        ctx.fillStyle = palette.back;
        const GAP = 8;
        const left = x * (32 * 3 + GAP * 4 + 8);
        const top = 70 * y + 16;
        ctx.fillRect(left, top, (32 * 3 + GAP * 4), (32 + GAP * 2));
        ctx.fillStyle = '#888';
        ctx.fillText(key, left, top - 4);
        ctx.fillStyle = palette.main;
        ctx.fillRect(left + GAP, top + GAP, 32, 32);
        ctx.fillStyle = palette.sub;
        ctx.fillRect(left + GAP * 2 + 32, top + GAP, 32, 32);
        ctx.fillStyle = palette.fore;
        ctx.fillRect(left + GAP * 3 + 32 * 2, top + GAP, 32, 32);
        // ctx.beginPath();
        // ctx.moveTo(left, top + 32 + 4);
        // ctx.arcTo(0,0, 0, 0, 32)
        // ctx.fill()
        // ctx.closePath();
    })
    
    let svg = ctx.getSvg();
    return XMLSerializer.serializeToString(svg);
}

let res = processMinimalist(data);
fs.writeFileSync('./release/colorsMinimalist.svg', res)
// fs.writeFileSync('./Readme.md', res);