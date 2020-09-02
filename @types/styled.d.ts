import 'styled-components';

declare module 'styled-components' {

  /* This is a type from styled components. The interface cannot start with I. */
  /* eslint-disable */
  export interface DefaultTheme {
    t: string;
    p: string;
    s: string;

    pb: string;
    sb: string;

    shadow: string;
    placeholder: string;
    placeholderHighlight: string;
    error: string;
    icon: string;

    /* extra colours for colour pattern for graphs */
    chart1: string;
    chart2: string;
    chart3: string;
    chart4: string;
  }
}
