import { DefaultTheme } from 'styled-components';
import { THEME } from 'lib/enums';

import { DEFAULT, BUBBLEGUM, LIGHT, PALENIGHT } from 'lib/themes';

export const getTheme = (theme: THEME): DefaultTheme => {
  switch (theme) {
    case THEME.DEFAULT:
      return DEFAULT;
    case THEME.BUBBLEGUM:
      return BUBBLEGUM;
    case THEME.LIGHT:
      return LIGHT;
    case THEME.PALENIGHT:
      return PALENIGHT;
    default:
      return DEFAULT;
  }
};
