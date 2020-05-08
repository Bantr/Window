import * as React from 'react';
import { Center } from 'stories/decorators';
import { Range as RangeComponent } from './Range';

export default {
  component: RangeComponent,
  title: 'Range component',
  decorators: [(storyFn: () => JSX.Element): JSX.Element => <Center width="500px">{storyFn()}</Center>]
};

export const Slider = (): JSX.Element => (
  <RangeComponent max={100} />
);

export const SliderWithDefaultValue = (): JSX.Element => (
  <RangeComponent defaultValue={5} max={20} />
);
