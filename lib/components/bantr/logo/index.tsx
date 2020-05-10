import * as React from 'react';
import { Svg } from './style';

interface IProps {
  size?: number;
}

export const Logo: React.FC<IProps> = ({ size = 45 }) => (
  <Svg height={size} viewBox="0 0 110 139" width={size}>
    <rect className="primary" height="100" rx="10" width="30" />
    <rect className="primary" height="80" rx="10" width="30" x="40" y="59" />
    <rect className="secondary" height="66" rx="10" width="30" x="80" y="33" />
  </Svg>
);
