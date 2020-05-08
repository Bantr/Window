import { Color, IRGBAColor, IRGBColor } from './classes';

export class ColorService {
  private readonly RGB_REGEX = /^rgb\(\s?(\d{1,3})\s?,\s?(\d{1,3})\s?,\s?(\d{1,3})\s?\)$/
  private readonly RGBA_REGEX = /^rgba\((\d{1,3})\s?,(\d{1,3})\s?,(\d{1,3})\s?,((0+\.)?\d{1,3})\)$/
  private readonly HEX_REGEX = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i

  public colorToRgb(color: Color): IRGBColor {
    return { r: color.R, g: color.G, b: color.B };
  }

  public rgbToString(rgb: IRGBColor, a = 1): string {
    if (a !== 1) {
      return `rgba(${rgb.r},${rgb.g},${rgb.b},${a})`;
    }
    return `rgb(${rgb.r},${rgb.g},${rgb.b})`;
  }

  public rgbaToString(rgba: IRGBAColor): string {
    return this.rgbToString(rgba, rgba.a);
  }

  private _getLightness(rgb: IRGBColor): number {
    let r = rgb.r / 255;
    let g = rgb.g / 255;
    let b = rgb.b / 255;
    r = r > 0.03928 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.03928 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.03928 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
    const y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.0;
    return y;
  }

  public intToString(int: number): string {
    // tslint:disable: no-bitwise
    const r = (int & 0xff0000) >>> 16;
    const g = (int & 0x00ff00) >>> 8;
    const b = (int & 0x0000ff) >>> 0;
    return `rgb(${r}, ${g}, ${b})`;
    // tslint:enable: no-bitwise
  }

  public rgbToHex(color: IRGBColor): string {
    let hex = '#';

    const r = color.r.toString(16);
    const g = color.g.toString(16);
    const b = color.b.toString(16);

    hex += r.length === 1 ? '0' + r : r;
    hex += g.length === 1 ? '0' + g : g;
    hex += b.length === 1 ? '0' + b : b;

    return hex;
  }

  public parseRgb(rgb: string): IRGBAColor {
    let matches = this.RGB_REGEX.exec(rgb);
    let a = 1;
    if (matches === null) {
      matches = this.RGBA_REGEX.exec(rgb);
      if (matches === null) {
        return;
      }
      a = parseFloat(matches[4]);
    }
    const r = parseInt(matches[1], 10);
    const g = parseInt(matches[2], 10);
    const b = parseInt(matches[3], 10);
    if (!(r >= 0 && r <= 255)) {
      return null;
    }
    if (!(g >= 0 && g <= 255)) {
      return null;
    }
    if (!(b >= 0 && b <= 255)) {
      return null;
    }
    if (!(a >= 0 && a <= 1)) {
      return null;
    }
    return { r: r, g: g, b: b, a: a };
  }

  public parseHexToRgb(hex: string): IRGBColor {
    const result = this.HEX_REGEX.exec(hex);
    return result
      ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
      : null;
  }

  // Reference: https://www.w3.org/TR/WCAG20/#contrast-ratiodef
  public isLightColor(color: IRGBColor): boolean {
    return color && this._getLightness(color) > 0.1791;
  }
}
