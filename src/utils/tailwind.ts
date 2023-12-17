import { hsl2rgb, rgb2hsl } from '~/tools';
import {parse} from '../tools/parse';

const table = [
    0.95,
    0.91,
    0.81,
    0.72,
    0.63,
    0.50,
    0.43, 
    0.32,
    0.21,
    0.11,
    0.5
] as const;

export function tailwindScale(color: 'string', min = 0, max = 1) {
    const rgb = parse(color);
    if (!rgb) throw Error('Not a valid color. Provide a color in xyz, rgb, lch, hsl, hsv or hex notation');
    const hsl = rgb2hsl(rgb);
    const diffs = table.map(v=>v - hsl.l / 100);
    const idx = diffs.indexOf(Math.min(...diffs.map(Math.abs)));
    const diff = diffs[idx];
    for (let i = idx; i < table.length; i++){
        diffs[i] = diff * (table.length - i) / (table.length - idx);
    }
    for (let i = idx - 1; i >= 0; i--){
        diffs[i] = diff * i / idx;
    }
    
    return Object.fromEntries(table.map((v, i)=>(v + diffs[i]) * (max - min) + min).map((v, i)=>[
        (i === 0 ? 50 : i === table.length - 1 ? 950 : i * 100).toString(),
        {h: hsl.h, s: hsl.s, l: Math.max(Math.min(1, v), 0) * 100}
    ]));
}