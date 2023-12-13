import { readFile, writeFile } from "node:fs/promises";
import * as fs from "fs";
import {special} from '../dist/main.cjs.js'
const palettes = special.minimalist;

import { html } from "satori-html";
import satori from "satori";

function minimalist(palette, name) {
    return `\t<div>
        ${name}
        <div class='back' style='background: ${palette.back}; border: 2px solid ${palette.fore}'>
            <div class='color' style='background: ${palette.main}'></div>
            <div class='color' style='background: ${palette.sub}'></div>
            <div class='color' style='background: ${palette.fore}'></div>
        </div>
    </div>`
}

let data = fs.readFileSync('./Readme.md').toString();

async function processMinimalist(data) {
    const template = html(`
<div class="minimalist">
${Object.keys(palettes).map(key=>{
    if (key === '_template_') return '';
    const palette = palettes[key].theme.colors;
    return minimalist(palette, key.at(0).toLocaleUpperCase() + key.slice(1))
}).join('\n')}
</div>
<style>
    .minimalist {
        align-items: center;
        justify-content: center;
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        color: #888;
    }
    .minimalist>div{
        height: 64px;
        display: flex;
        flex-direction: column;
        margin-left: 8px;
        margin-top: 16px;
    }
    .back {
        display: flex;
        flex-direction: row;
        padding: 8px;
        padding-left: 0;
        border-radius: 100px;
    }
    .color {
        display: flex;
        width: 32px;
        height: 32px;
        margin-left: 8px;
        border-radius: 100px;
    }
</style>
`);
    const svg = await satori(template, {
        width: 500,
        height: Math.ceil(Object.keys(palettes).length / 3) * (64+8+16),
        fonts: [
        {
            name: "VictorMono",
            data: await readFile("./release/Roboto-Regular.ttf"),
            weight: 500,
            style: "normal",
        },
        ],
    });
    fs.writeFileSync('./release/colorsMinimalist.svg', svg)
}

let res = processMinimalist(data);