import * as React from 'react';
import { Checkbox as CheckboxComponent } from '.';

export default {
  component: CheckboxComponent,
  title: 'Checkbox components'
};

export const Checkbox = (): JSX.Element => <CheckboxComponent />;
export const ReadOnlyCheckbox = (): JSX.Element => <CheckboxComponent defaultChecked readOnly />;
export const CheckboxWithLabel = (): JSX.Element => <CheckboxComponent label="Male" />;
