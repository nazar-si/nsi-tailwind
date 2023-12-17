import parseLib from 'color-parse';
import { RGB } from './types';
import { hsl2rgb, hsv2rgb } from './conversion';
import { lch2rgb, xyz2rgb } from './lch';

const spaces = [
    'hsl',
    'hsv',
    'rgb',
    'xyz',
    'lch',
    '#'
]

export function parse(color: string): RGB | null {
    if (!spaces.reduce((a, b)=> a || !color.startsWith(b), true)) return null;
    
    const parsed = parseLib(color);
    if (!parsed.space) return null;
    let values = parsed.values;
    let alpha = parsed.alpha;

    switch (parsed.space) {
        case 'hsv': return hsv2rgb({h: values[0], s: values[1], v: values[2], a: alpha});
        case 'hsl': return hsl2rgb({h: values[0], s: values[1], l: values[2], a: alpha});
        case 'xyz': return xyz2rgb({x: values[0], y: values[1], z: values[2], a: alpha});
        case 'lch': return lch2rgb({l: values[0], c: values[1], h: values[2], a: alpha});
        default: return {r: values[0], g: values[1], b: values[2], a: alpha};
    }
}