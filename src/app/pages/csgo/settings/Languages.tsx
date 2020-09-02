import * as React from 'react';
import { Helmet } from 'react-helmet';

export const Language: React.FC = () => (
  <div>
    <Helmet>
      <title>Settings | Languages</title>
      <meta content="Bantr recognizes Counterstrike Global Offensive is played all over the world. For some people language can be a barrier. Therefore we try to offer Bantr in as many languages as possible!" name="description" />
    </Helmet>
    Language page
  </div>
);
