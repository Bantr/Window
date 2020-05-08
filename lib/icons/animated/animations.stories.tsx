import * as React from 'react';
import { Icon } from '../BaseIcon';

import { Pulse as PulseComponent } from './Pulse';

export default {
  component: Icon,
  title: 'Animated components'
};

export const Pulse = (): JSX.Element => <PulseComponent stroke="orange" />;
