import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Stats } from '../../views/dashboard/stats';
import { BanInfo } from '../../views/dashboard/banInfo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 1.3rem;
    font-weight: 500;
    color: ${({ theme }) => theme.t}80;
    margin-bottom: 10px;
  }
`;
const Inner = styled.div`
  width: 100%;
`;

export const Dashboard: React.FC = () => (
  <Container>
    <Helmet>
      <title>CSGO | Dashboard</title>
      <meta content="Bantr's dashboard gives you quick access to default stats and ban information." name="description" />
    </Helmet>
    <Stats />
    <Inner>
      <BanInfo />
    </Inner>
  </Container>
);
