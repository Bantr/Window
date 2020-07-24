import * as React from 'react';
import { Center } from 'stories/decorators';
import { Range as RangeComponent } from './Range';

export default {
  component: RangeComponent,
  title: 'Range component',
  decorators: [(storyFn: () => React.ReactNode): React.ReactNode => <Center width="500px">{storyFn()}</Center>]
};

export const Slider = (): React.ReactNode => (
  <RangeComponent max={100} />
);

export const SliderWithDefaultValue = (): React.ReactNode => (
  <RangeComponent defaultValue={5} max={20} />
);
