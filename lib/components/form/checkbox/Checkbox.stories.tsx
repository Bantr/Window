import * as React from 'react';
import { Checkbox as CheckboxComponent } from '.';

export default {
  component: CheckboxComponent,
  title: 'Form'
};

export const Checkbox = (): React.ReactNode => <CheckboxComponent name="checkbox-default" />;
export const ReadOnlyCheckbox = (): React.ReactNode => <CheckboxComponent defaultChecked name="checkbox-readonly" readOnly />;
export const CheckboxWithLabel = (): React.ReactNode => <CheckboxComponent labelText="Male" name="checkbox-label" />;
