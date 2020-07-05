import * as React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';
import { Header, Footer } from '../components/nav';
import { Body } from '../components/landing';
interface IProps extends RouteComponentProps {
  path: string;
}
export const Landing: React.FC<IProps> = () => (
  <React.Fragment>
    <Helmet>
      <title>Bantr - Homepage</title>
    </Helmet>
    <Header />
    <Body />
    <Footer />
  </React.Fragment>
);
