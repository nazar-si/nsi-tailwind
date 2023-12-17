import chroma, { Color } from "chroma-js";
import { mixhsl, mixlch } from "../tools";

const table = [
    0.05,
    0.11,
    0.21,
    0.32,
    0.43, 
    0.50,
    0.63,
    0.72,
    0.81,
    0.91,
    0.95,
] as const;

export function tailwindScale(color: string, minColor?: string, maxColor?: string, mode: 'hsl' | 'lch' = 'hsl', preserveHue: boolean = false) {
    if (!chroma.valid(color)) throw Error("invalid color passed");
    const c = chroma(color);
    if (maxColor && !chroma.valid(maxColor)) throw Error("invalid max color");
    if (minColor && !chroma.valid(minColor)) throw Error("invalid min color");
    const min = minColor ? chroma(minColor) : chroma('white')
    const max = maxColor ? chroma(maxColor) : chroma('#010101')

    const scale = mode === 'lch' ? 100 : 1;
    const minL = min.get(`${mode}.l`) / scale;
    const maxL = max.get(`${mode}.l`) / scale;

    const diffs = table.map(v => v - (c.get(`${mode}.l`) / scale - minL) / (maxL - minL));
    const idx = diffs.map(Math.abs).indexOf(Math.min(...diffs.map(Math.abs)));
    const diff = diffs[idx];
    const colors: Color[] = Array(table.length).fill(0).map(()=>chroma('white'));

    for (let i = idx; i < table.length; i++){
        const mixing = (table.length - i) / (table.length - idx);
        const p = (table[i] + mixing * diff - table[idx] - diff) / (1 - table[idx] - diff);
        colors[i] = (mode === 'lch' ? mixlch : mixhsl)(c, max, p, preserveHue)
    }
    for (let i = idx - 1; i >= 0; i--){
        const mixing = (i + 1) / (idx + 1);
        const p = (table[i] + mixing * diff) / (table[idx] + diff);
        colors[i] = (mode === 'lch' ? mixlch : mixhsl)(min, c, p, preserveHue);
    }
    return Object.fromEntries(colors.map((c, i)=>[
        i === 0 ? '50' : i === table.length -1 ? '950' : (i * 100).toString(),
        colors[i].css()
    ]))
}