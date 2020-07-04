import * as React from 'react';
import { Title } from 'lib/components';
import { Connection } from '../../components/dashboard/settings/Connection';
import { UserContext } from 'lib/hooks';

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
      Connect these accounts and unlock amazing Bantr integrations.
      {
        platforms.map(({ accountId, platformName, isConnected, username }) => <Connection accountId={accountId} isConnected={isConnected} key={`connection-${name}`} platformName={platformName} username={username} />)
      }
    </>
  );
};
