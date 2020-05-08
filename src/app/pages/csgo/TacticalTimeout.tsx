import * as React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

interface IProps extends RouteComponentProps {
  path: string;
}

export const TacticalTimeout: React.FC<IProps> = () => (
  <div>
    <Helmet>
      <title>Csgo | Tactical Timeout</title>
    </Helmet>
    Tactical timeout page
  </div>
);
