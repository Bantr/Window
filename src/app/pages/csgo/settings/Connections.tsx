import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Title } from 'lib/components';
import { PlatformConnections, MatchMaking } from '../../../views/settings/connections';
import { InnerSettings } from './InnerSettings';

export const Connections: React.FC = () => (
  <div>
    <Helmet>
      <title>Settings | Connections</title>
      <meta content="Connect third party platforms and integrate Bantr with applications such as Discord and gain access to handy features!" name="description" />
    </Helmet>
    <Title size="large" type="h3">Connections</Title>
    <InnerSettings>
      <PlatformConnections />
      <MatchMaking />
    </InnerSettings>
  </div>
);
