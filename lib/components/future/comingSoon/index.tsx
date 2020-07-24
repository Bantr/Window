import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div<{ right: string }>`
  position:absolute;
  right: ${({ right }): string => right};
  padding: 5px 10px;
  background-color: ${({ theme }): string => theme.s};
  border-radius: 5px;
  font-weight: 800;
  font-size: 10px;
  text-transform: uppercase;
  color: white;
  user-select: none;
  top: 150px;
`;

interface IProps {
  text?: string;
  right?: string;
}

export const ComingSoon: React.FC<IProps> = ({ text = 'Coming soon', right = '-70px' }) => (
  <Container right={right}>{text}</Container>
);
