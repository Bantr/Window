import * as React from 'react';
import { Router } from './router';
import { GlobalStyle } from '../constants/globalStyle';
import { ThemeProvider } from 'lib/hooks';
import { SnackbarProvider } from 'notistack';
import { theme } from '../constants/theme';

/* tooltip styling */
import 'rc-tooltip/assets/bootstrap.css';
import 'simplebar/dist/simplebar.min.css';

export const App: React.FC<{}> = () => (
  <>
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        hideIconVariant={false}
        maxSnack={3}
      >
        <Router />
      </SnackbarProvider>
      <GlobalStyle />
    </ThemeProvider>
  </>
);
