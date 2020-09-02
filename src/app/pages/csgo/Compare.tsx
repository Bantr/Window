import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Construction } from 'lib/components';

export const Compare: React.FC = () => (
  <React.Fragment>
    <Helmet>
      <title>CSGO | Compare</title>
      <meta content="Compare your stats with pro players and gain insight into where you can perform better." name="description" />
    </Helmet>
    <Construction />
  </React.Fragment>
);
