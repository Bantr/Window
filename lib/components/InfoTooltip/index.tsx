import * as React from 'react';
import styled from 'styled-components';
import { Title } from 'lib/components';
import { Info } from 'lib/icons';
import Tooltip from 'rc-tooltip';

const StyledInfo = styled(Info) <{ secondaryColor: boolean }>`
  fill: ${({ secondaryColor, theme }): string => secondaryColor ? theme.s : theme.p};
`;

type placements = 'left' | 'right' | 'top' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

interface IProps {
  content: React.ReactNode | string;
  trigger?: 'hover' | 'click';
  secondaryColor?: boolean;
  title?: string;
  placement?: placements;
  scale?: number;
}

export const InfoTooltip: React.FC<IProps> = ({ content, trigger = 'hover', secondaryColor = false, placement = 'right', scale = 1, title }) => {
  if (title) {
    content = <div><Title size="medium" type="h5">{title}</Title> <div>{content}</div></div>;
  }

  return (
    <Tooltip
      overlay={content}
      overlayClassName="info-tooltip"
      placement={placement}
      trigger={trigger}
    >
      <StyledInfo
        className="tooltip"
        pointer
        scale={scale}
        secondaryColor={secondaryColor} />
    </Tooltip>
  );
};
