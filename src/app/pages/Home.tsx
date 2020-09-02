import * as React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Header, Footer } from '../components/nav';
import { Landing } from '../views/home/landing';
import { DataFeed } from '../views/home/dataFeed';

const Body = styled.div`
  width: 100%;
`;

export const Home: React.FC = () => (
  <React.Fragment>
    <Helmet>
      <title>Bantr - Homepage</title>
      {/* No need for a meta description. The default index.html meta tag kan be used. */}
    </Helmet>
    <Header />
    <Body>
      <Landing />
      <DataFeed />
    </Body>
    <Footer />
  </React.Fragment>
);
