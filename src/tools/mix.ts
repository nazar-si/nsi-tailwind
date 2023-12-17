import chroma, {Color} from "chroma-js";

export function mixlch(a: Color, b: Color, ratio: number, preserveHue?: boolean): Color {   
    const mix = chroma.mix(a, b, ratio, 'lch');
    if (preserveHue) {
        let rgbMix = chroma.mix(a, b, ratio, 'rgb');
        mix.set('lch.h', rgbMix.get('lch.h'));
    }

    return mix;
}

export function mixhsl(a: Color, b: Color, ratio: number, preserveHue?: boolean): Color {   
    const mix = chroma.mix(a, b, ratio, 'hsl');
    if (preserveHue) {
        let rgbMix = chroma.mix(a, b, ratio, 'rgb');
        return mix.set('hsl.h', rgbMix.get('hsl.h'));
    }

    return mix;
}