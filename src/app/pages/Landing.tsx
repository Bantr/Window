import * as React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';
import { Header } from '../components/nav';
interface IProps extends RouteComponentProps {
  path: string;
}
export const Landing: React.FC<IProps> = () => (
  <React.Fragment>
    <Helmet>
      <title>Bantr - Homepage</title>
    </Helmet>
    <Header />
  </React.Fragment>
);
