import * as React from 'react';
import { Toggle as ToggleComponent } from '.';

export default {
  component: ToggleComponent,
  title: 'Toggle component'
};

export const Toggle = (): React.ReactNode => (
  <ToggleComponent name="my-toggle" />
);

export const ToggleDisabled = (): React.ReactNode => (
  <ToggleComponent disabled name="my-toggle" />
);

// TODO: show off an onChange example that prints value to another div.
