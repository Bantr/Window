import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Landing } from '../views/privacy/landing';

export const Privacy: React.FC = () => (
  <div>
    <Helmet>
      <title>Privacy</title>
      <meta content="Bantr values your privacy. We try to be open and transparent of the data we collect. The data that we collect is only used to improve Bantr's website and not for financial benefits." name="description" />
    </Helmet>
    <Landing />
  </div>
);
