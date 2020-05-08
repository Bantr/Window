import * as React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

interface IProps extends RouteComponentProps {
  path: string;
}

export const Language: React.FC<IProps> = () => (
  <div>
    <Helmet>
      <title>Settings | Languages</title>
    </Helmet>
    Language page
  </div>
);
