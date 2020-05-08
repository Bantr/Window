import * as React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

interface IProps extends RouteComponentProps {
  path: string;
}

export const Tournaments: React.FC<IProps> = () => (
  <div>
    <Helmet>
      <title>Csgo | Tournaments</title>
    </Helmet>
    this is the Tournament page
  </div>
);
