import { addons } from '@storybook/addons';
import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';


addons.setConfig({
  theme: themes.dark
});

addParameters({
  options: {
    showRoots: true
  }
})