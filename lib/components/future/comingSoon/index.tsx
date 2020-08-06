import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div<{ position: IPosition }>`
  position: ${({ position }): string => position ? 'absolute' : 'relative'};
  padding: 5px 10px;
  background-color: ${({ theme }): string => theme.s};
  border-radius: 5px;
  font-weight: 800;
  font-size: 10px;
  text-transform: uppercase;
  color: white;
  user-select: none;

  ${({ position }): string => position && position.right ? `right: ${position.right}` : null};
  ${({ position }): string => position && position.top ? `top: ${position.top}` : null};
  ${({ position }): string => position && position.left ? `left: ${position.left}` : null};
  ${({ position }): string => position && position.bottom ? `bottom: ${position.bottom}` : null};
`;

interface IPosition {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

interface IProps {
  position?: IPosition;
}

export const ComingSoon: React.FC<IProps> = ({ position }) => (
  <Container position={position}>Coming soon!</Container>
);
