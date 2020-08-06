import * as React from 'react';
import styled from 'styled-components';
import { QuestionMark } from 'lib/icons';
import Tooltip from 'rc-tooltip';

const StyledQuestionMark = styled(QuestionMark) <{ secondaryColor: boolean }>`
  fill: ${({ secondaryColor, theme }): string => secondaryColor ? theme.s : theme.p};
`;

type placements = 'left' | 'right' | 'top' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

interface IProps {
  content: React.ReactNode | string;
  trigger?: 'hover' | 'click';
  secondaryColor?: boolean;
  placement?: placements;
}

export const QuestionMarkTooltip: React.FC<IProps> = ({ content, trigger = 'hover', secondaryColor = false, placement = 'right' }) => (
  <Tooltip
    overlay={content}
    placement={placement}
    trigger={trigger}
  >
    <StyledQuestionMark pointer scale={1.25} secondaryColor={secondaryColor} />
  </Tooltip>
);
