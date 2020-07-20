import { DefaultTheme } from 'styled-components';

const black = '#000000';
const white = '#FFFFFF';

const primaryLight = '#ff5e62';
const secondaryLight = '#f96';
const primaryDark = '#3366ff';
const secondaryDark = '#1ee499';

const primaryLightShade = '#b34245';
const secondaryLightShade = '#b36b47';
const primaryDarkShade = '#2447b3';
const secondaryDarkShade = '#15a06b';

const plight = '#ffffff';
const slight = '#edf1f7';
const shadowLight = '#8e9194';

const pdark = '#222b44';
const sdark = '#171a31';
const shadowDark = '#121527';

const placeholderLight = '#dddbdd';
const placeholderLightHighlight = '#ffffff';
const placeholderDark = '#8e9194';
const placeholderDarkHighlight = '#b0b0b0';

const lightTheme: DefaultTheme = {
  dark: false,
  t: black,
  p: primaryLight,
  pShade: primaryLightShade,
  s: secondaryLight,
  sShade: secondaryLightShade,
  pb: plight,
  sb: slight,
  shadow: shadowLight,
  placeholder: placeholderLight,
  placeholderHighlight: placeholderLightHighlight
};

const darkTheme: DefaultTheme = {
  dark: true,
  t: white,
  p: primaryDark,
  pShade: primaryDarkShade,
  s: secondaryDark,
  sShade: secondaryDarkShade,
  pb: pdark,
  sb: sdark,
  shadow: shadowDark,
  placeholder: placeholderDark,
  placeholderHighlight: placeholderDarkHighlight
};

export const theme = (mode: string): DefaultTheme => (mode === 'dark' ? darkTheme : darkTheme);
