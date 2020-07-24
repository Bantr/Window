import * as React from 'react';
import { Checkbox as CheckboxComponent } from '.';

export default {
  component: CheckboxComponent,
  title: 'Checkbox components'
};

export const Checkbox = (): React.ReactNode => <CheckboxComponent />;
export const ReadOnlyCheckbox = (): React.ReactNode => <CheckboxComponent defaultChecked readOnly />;
export const CheckboxWithLabel = (): React.ReactNode => <CheckboxComponent label="Male" />;
