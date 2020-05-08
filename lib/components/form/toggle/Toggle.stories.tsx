import * as React from 'react';
import { Toggle as ToggleComponent } from '.';

export default {
  component: ToggleComponent,
  title: 'Toggle component'
};

export const Toggle = (): JSX.Element => (
  <ToggleComponent name="my-toggle" />
);

export const ToggleDisabled = (): JSX.Element => (
  <ToggleComponent disabled name="my-toggle" />
);

// TODO: show off an onChange example that prints value to another div.
