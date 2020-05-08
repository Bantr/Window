import * as React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

interface IProps extends RouteComponentProps {
  path: string;
}

export const Tracker: React.FC<IProps> = () => (
  <div>
    <Helmet>
      <title>Csgo | Tracker</title>
    </Helmet>
    this is the tracker page
  </div>
);
