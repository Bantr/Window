import * as React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

interface IProps extends RouteComponentProps {
  path: string;
}

export const Compare: React.FC<IProps> = () => (
  <div>
    <Helmet>
      <title>Csgo | Compare</title>
    </Helmet>
    this is the compare page
  </div>
);
