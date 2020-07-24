import 'styled-components';

declare module 'styled-components' {

  /* This is a type from styled components. The interface cannot start with I. */
  /* eslint-disable */
  export interface DefaultTheme {
    dark: boolean;
    t: string;
    p: string;
    pShade: string;
    s: string;
    sShade: string;
    pb: string;
    sb: string;
    shadow: string;
    placeholder: string;
    placeholderHighlight: string;
  }
}
