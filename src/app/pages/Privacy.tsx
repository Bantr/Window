import * as React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

interface IProps extends RouteComponentProps {
  path: string;
}
export const Privacy: React.FC<IProps> = () => (
  <div>
    <Helmet>
      <title>Privacy</title>
    </Helmet>
    privacy page
  </div>
);
