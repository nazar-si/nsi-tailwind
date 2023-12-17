// Functions by Avisek Das - https://github.com/avisek
// Source - https://gist.github.com/avisek/eadfbe7a7a169b1001a2d3affc21052e

import { rgb2hsl } from "./conversion"
import { HSL, LAB, LCH, RGB, XYZ } from "./types"

function rgb2xyz(rgb: RGB): XYZ {
    let r = rgb.r / 255
    let g = rgb.g / 255
    let b = rgb.b / 255
  
    if (r > 0.04045) {
      r = Math.pow(((r + 0.055) / 1.055), 2.4)
    } else {
      r = r / 12.92
    }
  
    if (g > 0.04045) {
      g = Math.pow(((g + 0.055) / 1.055), 2.4)
    } else {
      g = g / 12.92
    }
  
    if (b > 0.04045) {
      b = Math.pow(((b + 0.055) / 1.055), 2.4)
    } else {
      b = b / 12.92
    }
  
    r *= 100
    g *= 100
    b *= 100
  
    // Observer = 2°, Illuminant = D65
    const x = r * 0.4124 + g * 0.3576 + b * 0.1805
    const y = r * 0.2126 + g * 0.7152 + b * 0.0722
    const z = r * 0.0193 + g * 0.1192 + b * 0.9505
  
    return { x, y, z}
}

function xyz2lab(xyz: XYZ) : LAB {
    // Observer = 2°, Illuminant = D65
    let x = xyz.x / 95.047
    let y = xyz.y / 100.000
    let z = xyz.z / 108.883
  
    if (x > 0.008856) {
      x = Math.pow(x, 0.333333333)
    } else {
      x = 7.787 * x + 0.137931034
    }
  
    if (y > 0.008856) {
      y = Math.pow(y, 0.333333333)
    } else {
      y = 7.787 * y + 0.137931034
    }
  
    if (z > 0.008856) {
      z = Math.pow(z, 0.333333333)
    } else {
      z = 7.787 * z + 0.137931034
    }
  
    const l = (116 * y) - 16
    const A = 500 * (x - y)
    const B = 200 * (y - z)
  
    return { l, A, B };
}

function lab2lch(lab: LAB): LCH {
    const { l, A, B } = lab
  
    const c = Math.sqrt(Math.pow(A, 2) + Math.pow(B, 2))
  
    let h = Math.atan2(B, A) //Quadrant by signs
    if (h > 0) {
      h = (h / Math.PI) * 180
    } else {
      h = 360 - (Math.abs(h) / Math.PI) * 180
    }
  
    return { l, c, h }
}

export function lch2lab(lch: LCH): LAB {
    const { l, c, h } = lch
  
    const A = Math.cos(h * 0.01745329251) * c
    const B = Math.sin(h * 0.01745329251) * c;
  
    return { l, A, B };
}

function lab2xyz(lab: LAB): XYZ {
    const { l, A, B } = lab
  
    let y = (l + 16) / 116
    let x = A / 500 + y
    let z = y - B / 200
  
    if (Math.pow(y, 3) > 0.008856) {
      y = Math.pow(y, 3)
    } else {
      y = (y - 0.137931034) / 7.787
    }
  
    if (Math.pow(x, 3) > 0.008856) {
      x = Math.pow(x, 3)
    } else {
      x = (x - 0.137931034) / 7.787
    }
  
    if (Math.pow(z, 3) > 0.008856) {
      z = Math.pow(z, 3)
    } else {
      z = (z - 0.137931034) / 7.787
    }
  
    // Observer = 2°, Illuminant = D65
    x = 95.047 * x
    y = 100.000 * y
    z = 108.883 * z
  
    return { x, y, z }
}

export function xyz2rgb(xyz: XYZ) : RGB {
    // Observer = 2°, Illuminant = D65
    const x = xyz.x / 100 // X from 0 to 95.047
    const y = xyz.y / 100 // Y from 0 to 100.000
    const z = xyz.z / 100 // Z from 0 to 108.883
  
    let r = x * 3.2406 + y * -1.5372 + z * -0.4986
    let g = x * -0.9689 + y * 1.8758 + z * 0.0415
    let b = x * 0.0557 + y * -0.2040 + z * 1.0570
  
    if (r > 0.0031308) {
      r = 1.055 * (Math.pow(r, 0.41666667)) - 0.055
    } else {
      r = 12.92 * r
    }
  
    if (g > 0.0031308) {
      g = 1.055 * (Math.pow(g, 0.41666667)) - 0.055
    } else {
      g = 12.92 * g
    }
  
    if (b > 0.0031308) {
      b = 1.055 * (Math.pow(b, 0.41666667)) - 0.055
    } else {
      b = 12.92 * b
    }
  
    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);
  
    return { r, g, b }
}

export function rgb2lch(rgb: RGB) : LCH {
    const xyz = rgb2xyz(rgb);
    const lab = xyz2lab(xyz);
    return lab2lch(lab); 
}

export function lch2rgb(lch: LCH, overflow?: boolean) : RGB {
    const lab = lch2lab(lch);
    const xyz = lab2xyz(lab);
    const rgb = xyz2rgb(xyz);
    return {
        r: Math.min(Math.max(0, rgb.r), overflow? 256 : 255),
        g: Math.min(Math.max(0, rgb.g), overflow? 256 : 255),
        b: Math.min(Math.max(0, rgb.b), overflow? 256 : 255),
    }
}

function checkLCH(lch: LCH): boolean {
    const rgb = lch2rgb(lch, true);
    return rgb.r !== 256 && rgb.b !== 256 && rgb.g !== 256;
}

export function limitLCH(color: LCH): LCH {
    let lch = {...color};
    let top = lch.c + 0.5;
    let bottom = 0;
    if (checkLCH(lch)) return lch
    let i = 0;
    while (checkLCH({...lch, c: lch.c + 0.5}) || !checkLCH(lch) ) {
      if (!checkLCH(lch)) {
        top = lch.c + 0.5;
      } else {
        bottom = lch.c
      }
      lch.c = (top + bottom) / 2 - 0.25;
      i++;
      if (i === 10) break;
    }
    return lch;
}

export function lch2hsl(lch: LCH) : HSL {
    return rgb2hsl(lch2rgb(lch));
}
