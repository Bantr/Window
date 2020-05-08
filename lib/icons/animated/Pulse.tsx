import * as React from 'react';
import { Icon, IIconProps, defaultProps } from '../BaseIcon';

export const Pulse: React.FC<IIconProps> = (props) => (
  <Icon
    {...props}
    fill="none"
    viewBox="0 0 45 45"
  >
    <g fill="none" fillRule="evenodd" strokeWidth="2" transform="translate(1 1)">
      <circle cx="22" cy="22" r="6" strokeOpacity="0">
        <animate
          attributeName="r"
          begin="1.5s"
          calcMode="linear"
          dur="3s"
          repeatCount="indefinite"
          values="6;22"
        />
        <animate
          attributeName="stroke-opacity"
          begin="1.5s"
          calcMode="linear"
          dur="3s"
          repeatCount="indefinite"
          values="1;0"
        />
        <animate
          attributeName="stroke-width"
          begin="1.5s"
          calcMode="linear"
          dur="3s"
          repeatCount="indefinite"
          values="2;0"
        />
      </circle>
      <circle
        cx="22" cy="22"
        r="6"
        strokeOpacity="0"
      >
        <animate
          attributeName="r"
          begin="3s"
          calcMode="linear"
          dur="3s"
          repeatCount="indefinite"
          values="6;22"
        />
        <animate
          attributeName="stroke-opacity"
          begin="3s"
          calcMode="linear"
          dur="3s"
          repeatCount="indefinite"
          values="1;0"
        />
        <animate
          attributeName="stroke-width"
          begin="3s"
          calcMode="linear"
          dur="3s"
          repeatCount="indefinite"
          values="2;0"
        />
      </circle>
      <circle cx="22" cy="22" r="8">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="linear"
          dur="1.5s"
          repeatCount="indefinite"
          values="6;1;2;3;4;5;6"
        />
      </circle>
    </g>
  </Icon>
); Pulse.defaultProps = defaultProps;
