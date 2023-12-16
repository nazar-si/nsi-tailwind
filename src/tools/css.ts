import { lch2rgb } from "./lch";
import { HSL, LCH, RGB } from "./types";

export function cssRGB(rgb: RGB) : string {
    return `rgb(${Math.round(rgb.r)} ${Math.round(rgb.g)} ${Math.round(rgb.b)})`;
}

export function cssHSL(hsl: HSL): string {
    return `rgb(${Math.round(hsl.h)} ${Math.round(hsl.s)}% ${Math.round(hsl.l)}%)`;
}

export function cssLCH(lch: LCH): string {
    return cssRGB(lch2rgb(lch));
}