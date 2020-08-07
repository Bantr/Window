import * as React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';
import { Header, Footer } from '../components/nav';
import { Landing } from '../views/home/landing';
import { DataFeed } from '../views/home/dataFeed';

interface IProps extends RouteComponentProps {
  path: string;
}

const Body = styled.div`
  width: 100%;
`;

export const Home: React.FC<IProps> = () => (
  <React.Fragment>
    <Helmet>
      <title>Bantr - Homepage</title>
    </Helmet>
    <Header />
    <Body>
      <Landing />
      <DataFeed />
    </Body>
    <Footer />
  </React.Fragment>
);
