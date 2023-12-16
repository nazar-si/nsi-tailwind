import { hsl2rgb, lch2rgb, limitLCH, rgb2hsl, rgb2lch } from "./";
import { HSL, LCH, RGB } from "./types";


export function mixrgb(a: RGB, b: RGB, mix: number): RGB {   
    return {
        r: a.r * (1 - mix) + mix * b.r,
        g: a.g * (1 - mix) + mix * b.g,
        b: a.b * (1 - mix) + mix * b.b,
    }
}

export function mixhsl(a: HSL, b: HSL, mix: number, preserveHue?: boolean): HSL {
    let rgb = hsl2rgb({h: a.h, s:100, l: 50});
    let lumA = (0.2126*rgb.r + 0.7152*rgb.g + 0.0722*rgb.b) / 255 / 0.7152;
    rgb = hsl2rgb({h: b.h, s:100, l: 50});
    let lumB = (0.2126*rgb.r + 0.7152*rgb.g + 0.0722*rgb.b) / 255 / 0.7152;
    let lum = (lumA + lumB) / 2;
    let mixL = 1 - (1 - mix) ** (1 + lum);

    let h = Math.round(a.h * (1 - mix) + b.h * mix);
    if (preserveHue) {
        let rgbMix = mixrgb(hsl2rgb(a), hsl2rgb(b), mix);
        h = rgb2hsl(rgbMix).h;
    }

    return {
        h,
        s: Math.round((a.s * (1 - mix) + b.s * mix) * 100) / 100,
        l: Math.round((a.l * (1 - mixL) + b.l * mixL) * 100) / 100,
    }
}

export function mixlch(a: LCH, b: LCH, mix: number, preserveHue?: boolean): LCH {   
    let h = a.h * (1 - mix) + mix * b.h;
    if (preserveHue) {
        let rgbMix = mixrgb(lch2rgb(a), lch2rgb(b), mix);
        h = rgb2lch(rgbMix).h;
    }
    return limitLCH({
        l: a.l * (1 - mix) + mix * b.l,
        c: a.c * (1 - mix) + mix * b.c,
        h,
    })
}