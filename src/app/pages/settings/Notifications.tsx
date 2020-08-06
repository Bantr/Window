import * as React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';
import { InnerSettings } from './InnerSettings';
import { Title } from 'lib/components';
import { BanNotifications } from '../../views/settings/notifications/banNotifications';
import { PlatformNotifications } from '../../views/settings/notifications/platformNotifications';

interface IProps extends RouteComponentProps {
  path: string;
}

export const Notifications: React.FC<IProps> = () => (
  <div>
    <Helmet>
      <title>Settings | Notifications</title>
    </Helmet>
    <Title size="huge" type="h3">Notifications</Title>
    <InnerSettings>
      <PlatformNotifications />
      <BanNotifications />
    </InnerSettings>
  </div>
);
