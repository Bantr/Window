import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, IDefaultProps } from '../style';

const blinkAnimation = keyframes`
  from{
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 8px;
  height: 8px;
  margin-right: 10px;
  animation: ${blinkAnimation} .8s infinite alternate;
  background-color: ${({ theme }) => theme.t};
`;

interface IProps extends IDefaultProps {
  text?: string;
}

export const LiveTag: React.FC<IProps> = ({ position, text = 'LIVE' }) => (
  <Container position={position}>
    <Circle /> <span className="text">{text}</span>
  </Container>
);
