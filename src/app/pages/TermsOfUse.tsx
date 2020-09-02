import * as React from 'react';
import { Helmet } from 'react-helmet';

export const TermsOfUse: React.FC = () => (
  <div>
    <Helmet>
      <title>Terms of Use</title>
      <meta content="Bantr's terms of service contains the legal agreements in order to be granted access to our platform. Take this very seriously!" name="description" />
    </Helmet>
    Terms of use page
  </div>
);
