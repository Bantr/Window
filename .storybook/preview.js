import * as React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withConsole, setConsoleOptions } from '@storybook/addon-console';

import { ThemeProvider } from 'styled-components';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { theme } from '../src/constants/theme';
import { StorybookGlobalStyle } from '../src/constants/globalStyle';


// Sets default viewports
addParameters({
  viewport: {
    // viewports: newViewports, to add custom viewports (newviewport is an array of viewports).
    defaultViewport: INITIAL_VIEWPORTS
  }
});

// Styled components theme + global styling
addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>
    <StorybookGlobalStyle>
      {storyFn()}
    </StorybookGlobalStyle>
  </ThemeProvider>
));


// Receive outputs as info, warn and error actions in the panel
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
setConsoleOptions({ panelExclude: [] }) // Show HMR messages
