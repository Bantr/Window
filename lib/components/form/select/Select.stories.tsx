import * as React from 'react';
import { Select as SelectComponent } from '.';

export default {
  component: SelectComponent,
  title: 'Select components'
};

export const Select = (): React.ReactNode => <SelectComponent name="select-default" />;
