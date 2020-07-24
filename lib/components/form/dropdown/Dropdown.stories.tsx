import * as React from 'react';
import { Dropdown as DropdownComponent, DropdownOption } from '.';

export default {
  component: DropdownComponent,
  title: 'Dropdown components'
};

export const Dropdown = (): React.ReactNode => (
  <DropdownComponent>
    <DropdownOption value="spaghetti" />
    <DropdownOption value="lasagna" />
    <DropdownOption value="pizza" />
  </DropdownComponent>
);
