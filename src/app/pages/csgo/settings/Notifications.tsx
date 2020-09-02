import * as React from 'react';
import { Helmet } from 'react-helmet';
import { InnerSettings } from './InnerSettings';
import { Title } from 'lib/components';
import { PlatformNotifications } from '../../../views/settings/notifications/platformNotifications';
import { BanNotifications } from '../../../views/settings/notifications/banNotifications';

export const Notifications: React.FC = () => (
  <div>
    <Helmet>
      <title>Settings | Notifications</title>
      <meta content="" name="description" />
    </Helmet>
    <Title size="large" type="h3">Notifications</Title>
    <InnerSettings>
      <PlatformNotifications />
      <BanNotifications />
    </InnerSettings>
  </div>
);
