import * as React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';
import { Construction } from 'lib/components';

interface IProps extends RouteComponentProps {
  path: string;
}

export const Compare: React.FC<IProps> = () => (
  <React.Fragment>
    <Helmet>
      <title>CSGO | Compare</title>
    </Helmet>
    <Construction />
  </React.Fragment>
);
