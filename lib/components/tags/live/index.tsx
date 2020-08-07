import * as React from 'react';
import styled from 'styled-components';
import { Container, IDefaultProps } from '../style';

const Circle = styled.div`
  border-radius: 50%;
  width: 8px;
  height: 8px;
  margin-right: 10px;
  background-color: white;
`;

interface IProps extends IDefaultProps {
  text: string;
}

export const LiveTag: React.FC<IProps> = ({ position, text = 'LIVE' }) => (
  <Container position={position}>
    <Circle /> <span className="text">{text}</span>
  </Container>
);
