import * as React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

interface IProps extends RouteComponentProps {
  default: boolean;
}

export const NotFound: React.FunctionComponent<IProps> = () => (
  <div>
    <Helmet>
      <title>Error 404</title>
    </Helmet>
    <h1>this page could not be found</h1>
  </div>
);
