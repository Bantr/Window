import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Construction } from 'lib/components';

export const Tracker: React.FC = () => (
  <React.Fragment>
    <Helmet>
      <title>Tracker</title>
      <meta content="Bantr Trackers gives an overview of all players you played against and are tracked by Bantr. Always get notified when someone received a ban." name="description" />
    </Helmet>
    <Construction />
  </React.Fragment>
);
