export class Color {
  R: number
  G: number
  B: number

  constructor(r: number, g: number, b: number) {
    this.R = r;
    this.G = g;
    this.B = b;
  }
}

export interface IRGBColor {
  r: number;
  g: number;
  b: number;
}
export interface IRGBAColor extends IRGBColor {
  a: number;
}

export interface IHSLColor {
  h: number;
  s: number;
  l: number;
}
