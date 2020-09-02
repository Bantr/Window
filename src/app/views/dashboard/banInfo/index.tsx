import * as React from 'react';
import styled from 'styled-components';
import { Title } from 'lib/components';
import { BanRate } from './banRate';
import { BansPerMonth } from './bansPerMonth';
import { BanFeed } from './banFeed';

const Container = styled.div``;
const Inner = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: 1fr 3fr 2fr;

  h2 {
    margin-bottom: 20px;
  }
`;

export const BanInfo: React.FC = () => (
  <Container>
    <Title size="huge" type="h2">Ban info</Title>
    <Inner>
      <BanRate />
      <BansPerMonth />
      <BanFeed />
    </Inner>
  </Container>
);
