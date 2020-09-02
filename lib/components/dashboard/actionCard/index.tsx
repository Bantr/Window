import * as React from 'react';
import { Container } from './style';

interface IProps {
  icon: React.ReactNode;
  text: string;
  buttonText: string;
  action: () => void;
}

export const ActionCard: React.FC = () => (
  <Container>i am an action card!!!</Container>
);
