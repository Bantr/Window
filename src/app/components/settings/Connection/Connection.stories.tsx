import * as React from 'react';
import { Connection as ConnectionComponent } from '.';

export default {
  component: ConnectionComponent,
  title: 'Connection components'
};

export const Connection = (): JSX.Element => (
  <ConnectionComponent
    accountId="123456789"
    isConnected
    platformName="Steam"
    username="Emilio Rodriquez"
  />
);

export const DisconnectedConnection = (): JSX.Element => (
  <ConnectionComponent
    accountId={null}
    isConnected={false}
    platformName="Steam"
    username={null}
  />
);
