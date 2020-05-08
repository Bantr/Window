import * as React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

interface IProps extends RouteComponentProps {
  path: string;
}

export const Notifications: React.FC<IProps> = () => (
  <div>
    <Helmet>
      <title>Settings | Notifications</title>
    </Helmet>
    Notifications page
  </div>
);
