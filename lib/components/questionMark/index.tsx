import * as React from 'react';
import Tooltip from 'rc-tooltip';
import { QuestionMark as QuestionMarkIcon } from 'lib/icons';

interface IProps {
  message: string;
  placement: 'top' | 'right' | 'bottom' | 'left';
  color: string;
  size: 'small' | 'medium' | 'large';
}

export const QuestionMark: React.FC<IProps> = ({ message, placement = 'bottom', size }) => {
  function setScale(): number {
    switch (size) {
      case 'small':
        return 0.8;
      case 'medium':
        return 1;
      case 'large':
        return 1.2;
    }
  }
  return (
    <Tooltip
      overlay={message}
      placement={placement}
      trigger="hover"
    >
      <QuestionMarkIcon scale={setScale()} />
    </Tooltip>
  );
};
