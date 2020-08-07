import * as React from 'react';
import { Title } from 'lib/components';
import { Connection } from './connection';
import { UserContext } from 'lib/context';

interface IPlatformInfo {
  accountId: string;
  platformName: string;
  isConnected: boolean;
  username: string;
}

export const PlatformConnections: React.FC<{}> = () => {
  const { userData } = React.useContext(UserContext);
  if (!userData) { throw new Error('User context not defined'); }

  const platforms: IPlatformInfo[] = [
    {
      accountId: userData.discordId ? userData.discordId : null,
      username: userData.discordUsername ? userData.discordUsername : null,
      platformName: 'Discord',
      isConnected: userData.discordId ? true : false
    }];

  return (
    <>
      <Title size="large" type="h4">Platforms</Title>
      Connect Discord to receive notifications via Bantr&apos;s Discord bot. Advanced notification settings can be configured in the notification settings.
      {
        platforms.map(({ accountId, platformName, isConnected, username }) => <Connection accountId={accountId} isConnected={isConnected} key={`connection-${name}`} platformName={platformName} username={username} />)
      }
    </>
  );
};
