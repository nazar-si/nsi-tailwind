import { hsl2rgb } from "./conversion";

export type HSV = {
    h: number,
    s: number,
    v: number,
}
export type HSL = {
    h: number,
    s: number,
    l: number,
}
export type RGB = {
    r: number,
    g: number,
    b: number,
}

export function mixhsl(a: HSL, b: HSL, mix: number) : HSL{
    let rgb = hsl2rgb(a.h, 100, 50);
    let lumA = (0.2126*rgb.r + 0.7152*rgb.g + 0.0722*rgb.b) / 255 / 0.7152;
    rgb = hsl2rgb(b.h, 100, 50);
    let lumB = (0.2126*rgb.r + 0.7152*rgb.g + 0.0722*rgb.b) / 255 / 0.7152;
    let lum = (lumA + lumB) / 2;
    let mixL = 1 - (1 - mix) ** (1 + lum)

    return {
        h: Math.round(a.h * (1 - mix) + b.h * mix),
        s: Math.round((a.s * (1 - mix) + b.s * mix) * 100) / 100,
        l: Math.round((a.l * (1 - mixL) + b.l * mixL) * 100) / 100,
    }
}