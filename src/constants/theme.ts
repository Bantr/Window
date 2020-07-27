import { DefaultTheme } from 'styled-components';
import { darkTheme } from './themes';

export const theme = (mode: string): DefaultTheme => (mode === 'dark' ? darkTheme : darkTheme);
