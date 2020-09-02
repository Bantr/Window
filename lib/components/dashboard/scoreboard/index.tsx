import * as React from 'react';
import { Container, Header, Row } from './style';
import { IRound } from 'lib/types/generated';

interface IProps {
  rounds: IRound[];
}

export const Scoreboard: React.FC<IProps> = ({ rounds }) => (
  <Container>
    <Header></Header>
    {rounds.map((_) => (
      <Row key={`scoreboard-round-${_.id}`}>this </Row>
    ))}
  </Container>
);
