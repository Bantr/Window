import * as React from 'react';
import { Connection as ConnectionComponent } from '.';

export default {
  component: ConnectionComponent,
  title: 'Connection components'
};

export const Connection = (): React.ReactNode => (
  <ConnectionComponent
    accountId="123456789"
    isConnected
    platformName="Steam"
    username="Emilio Rodriquez"
  />
);

export const DisconnectedConnection = (): React.ReactNode => (
  <ConnectionComponent
    accountId={null}
    isConnected={false}
    platformName="Steam"
    username={null}
  />
);
