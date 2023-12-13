import { readFile } from "node:fs/promises";
import * as fs from "fs";
import {gradual as palettes} from '../../dist/main.cjs.js'
import { html } from "satori-html";
import satori from "satori";

function gradual(palette, name) {
    return `\t<div>
        ${name}
        <div class='bar'>
        ${
            Object.keys(palette.primary).filter(key=>key!=='DEFAULT').sort((a,b)=>Number(a) - Number(b)).map((key)=>"\t\t\t<div>" + key + "</div>").join('\n')
        }
        </div>
        <div class='bar'>
        ${
            Object.keys(palette.primary).filter(key=>key!=='DEFAULT').sort((a,b)=>Number(a) - Number(b)).map((key)=>"\t\t\t<div style='background:" + palette.primary[key].replace('/ <alpha-value>', '') + "'></div>").join('\n')
        }
        </div>
        <div class='bar'>
        ${
            Object.keys(palette.secondary).filter(key=>key!=='DEFAULT').sort((a,b)=>Number(a) - Number(b)).map((key)=>"\t\t\t<div style='background:" + palette.secondary[key].replace('/ <alpha-value>', '') + "'></div>").join('\n')
        }
        </div>
        <div class='bar'>
        ${
            Object.keys(palette.gray).filter(key=>key!=='DEFAULT').sort((a,b)=>Number(a) - Number(b)).map((key)=>"\t\t\t<div style='background:" + palette.gray[key].replace('/ <alpha-value>', '') + "'></div>").join('\n')
        }
        </div>
    </div>`
}


export async function processGradual() {
    const template = html(`
<div class="gradual">
${Object.keys(palettes).filter(key=>key!=='local').map(key=>{
    if (key === '_template_') return '';
    const palette = palettes[key].theme.colors;
    return gradual(palette, key.at(0).toLocaleUpperCase() + key.slice(1))
}).join('\n')}
</div>
<style>
    .gradual {
        align-items: stretch;
        justify-content: center;
        display: flex;
        flex-direction: column;
        width: 100%;
        color: #888;
        font-size: 24px;
    }
    .gradual>div{
        height: 100px;
        display: flex;
        width: 100%;
        flex-direction: column;
        margin-top: 16px;
    }
    .bar {
        display: flex;
        flex-direction: row;
        height: 12px;
        width: 100%;
        margin-top: 4px;
        border-radius: 16px;
        overflow: hidden;
    }
    .bar div{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        flex: 1;
        font-size: 16px;
    }
</style>
`);
    const svg = await satori(template, {
        width: 700,
        height: Math.ceil(Object.keys(palettes).length) * (100+16),
        fonts: [
        {
            name: "VictorMono",
            data: await readFile("./release/Roboto-Regular.ttf"),
            weight: 500,
            style: "normal",
        },
        ],
    });
    fs.writeFileSync('./release/colorsGradual.svg', svg)
}
