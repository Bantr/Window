import * as React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

interface IProps extends RouteComponentProps {
  default: boolean;
}

export const Error403: React.FunctionComponent<IProps> = () => (
  <div>
    <Helmet>
      <title>Error 403</title>
    </Helmet>
    <h1>You are not authorized to view this page.</h1>
  </div>
);
