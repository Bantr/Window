import * as React from 'react';
import { Icon, IIconProps, defaultProps } from './BaseIcon';

export const Spinner: React.FC<IIconProps> = (props) => (
  <Icon
    {...props}
    viewBox="0 0 100 140"
  >
    <rect height="120" rx="6" width="15" y="10">
      <animate
        attributeName="height"
        begin="0.5s"
        calcMode="linear"
        dur="1s"
        repeatCount="indefinite"
        values="120;110;100;90;80;70;60;50;40;140;120"
      />
      <animate
        attributeName="y"
        begin="0.5s"
        calcMode="linear"
        dur="1s"
        repeatCount="indefinite"
        values="10;15;20;25;30;35;40;45;50;0;10"
      />
    </rect>
    <rect height="120" rx="6" width="15" x="30" y="10">
      <animate
        attributeName="height"
        begin="0.25s"
        calcMode="linear"
        dur="1s"
        repeatCount="indefinite"
        values="120;110;100;90;80;70;60;50;40;140;120"
      />
      <animate
        attributeName="y"
        begin="0.25s"
        calcMode="linear"
        dur="1s"
        repeatCount="indefinite"
        values="10;15;20;25;30;35;40;45;50;0;10"
      />
    </rect>
    <rect height="140" rx="6" width="15" x="60">
      <animate
        attributeName="height"
        begin="0s"
        calcMode="linear"
        dur="1s"
        repeatCount="indefinite"
        values="120;110;100;90;80;70;60;50;40;140;120"
      />
      <animate
        attributeName="y"
        begin="0s"
        calcMode="linear"
        dur="1s"
        repeatCount="indefinite"
        values="10;15;20;25;30;35;40;45;50;0;10"
      />
    </rect>
    <rect height="120" rx="6" width="15" x="90" y="10">
      <animate
        attributeName="height"
        begin="0.25s"
        calcMode="linear"
        dur="1s"
        repeatCount="indefinite"
        values="120;110;100;90;80;70;60;50;40;140;120"
      />
      <animate
        attributeName="y"
        begin="0.25s"
        calcMode="linear"
        dur="1s"
        repeatCount="indefinite"
        values="10;15;20;25;30;35;40;45;50;0;10"
      />
    </rect>
    <rect height="120" rx="6" width="15" x="120" y="10">
      <animate
        attributeName="height"
        begin="0.5s"
        calcMode="linear"
        dur="1s"
        repeatCount="indefinite"
        values="120;110;100;90;80;70;60;50;40;140;120"
      />
      <animate
        attributeName="y"
        begin="0.5s"
        calcMode="linear"
        dur="1s"
        repeatCount="indefinite"
        values="10;15;20;25;30;35;40;45;50;0;10"
      />
    </rect>
  </Icon>
); Spinner.defaultProps = defaultProps;
