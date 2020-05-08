import * as React from 'react';
import { Radio as RadioComponent } from '.';
import { RadioGroup as RadioGroupComponent } from '../radioGroup';

export default {
  component: RadioComponent,
  title: 'Radio components'
};

export const Radio = (): JSX.Element => <RadioComponent />;

// this should be worked out with the value shown in another div.
export const RadioGroup = (): JSX.Element => (
  <RadioGroupComponent name="favourite food">
    <RadioComponent label="pizza" value="pizza" />
    <RadioComponent label="lasagne" value="lasagne" />
    <RadioComponent label="spaghetti" value="spaghetti" />
  </RadioGroupComponent>
);
