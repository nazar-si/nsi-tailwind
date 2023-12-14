export function rgb2hsv(r: number, g: number, b: number) {
    let h, s;
    r /= 255;
    g /= 255;
    b /= 255;
    const v = Math.max(r, g, b);
    let diff = v - Math.min(r, g, b);
    if (diff === 0) {
        h = s = 0;
    } else {
        s = diff / v;
        diff *= 6;
        
        switch (v) {
            case r: h = (g - b) / diff; break;
            case g: h = (1 / 3) + (b - r) / diff; break;
            default: h = (2 / 3) + (r - g) / diff; break;
        }
        
        h = h % 1 + (h < 0 ? 1 : 0);
    }
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 1e4) / 100,
        v: Math.round(v * 1e4) / 100,
    };
};

export function hsv2rgb(h: number, s: number, v: number) {
    s /= 100;
    v /= 100;
    const c = v * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = v - c;
    let r, g, b;
    r = g = b = 0;
    switch (Math.floor(h / 60)) {
        case 0: r = c; g = x; break;
        case 1: r = x; g = c; break;
        case 2: g = c; b = x; break;
        case 3: g = x; b = c; break;
        case 4: b = c; r = x; break;
        case 5: b = x; r = c; break;
    }
    return {
        r: Math.round(Math.abs(r + m) * 255),
        g: Math.round(Math.abs(g + m) * 255),
        b: Math.round(Math.abs(b + m) * 255),
    }
}

export function hex2rgb(hex: string) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}

export function hsv2hsl(h: number, s:number, v: number) {
    const l = v - v * s / 200;
    return {
        h,
        s: l % 100 === 0 ? 0 : Math.round(1e4 * (v - l) / Math.min(l, 100 - l)) / 100,
        l: Math.round(l * 100) / 100,
    }
}

export function hsl2hsv(h: number, s: number, l: number) {
    const v =  l + s * Math.min(l, 100 - l) / 100;
    return {
        h,
        s: v === 0 ? 0 : Math.round(1e4 * (2 - 2 * l / v)) /100,
        v: Math.round( v * 100) / 100,
    } 
}

export function rgb2hsl(r: number, g: number, b: number) {
    const hsv = rgb2hsv(r, g, b);
    return hsv2hsl(hsv.h, hsv.s, hsv.v);
}

export function hsl2rgb(h: number, s: number, l: number) {
    const hsv = hsl2hsv(h, s, l);
    return hsv2rgb(hsv.h, hsv.s, hsv.v);
}

