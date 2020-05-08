import * as React from 'react';
import { Dropdown as DropdownComponent, DropdownOption } from '.';

export default {
  component: DropdownComponent,
  title: 'Dropdown components'
};

export const Dropdown = (): JSX.Element => (
  <DropdownComponent>
    <DropdownOption value="spaghetti" />
    <DropdownOption value="lasagna" />
    <DropdownOption value="pizza" />
  </DropdownComponent>
);
