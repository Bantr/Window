import * as React from 'react';
import { DropDown } from './style';
import { useQuery, useSubscription } from '@apollo/client';
import GET_CONNECTION_STATUS from 'lib/graphql/queries/getConnectionStatus.gql';
import SUBSCRIPTION_GET_LATEST_MATCH from 'lib/graphql/subscriptions/getLatestMatch.gql';
import { Button } from 'lib/components';
import { UserContext } from 'lib/context';
import { IMatch } from 'lib/types/generated';

interface IConnectionStatusResponse {
  lastKnownMatch: string;
  matchmakingAuthCode: string;
}
interface ILatestMatchResponse {
  match: IMatch
}

export const ConnectionsDropDown: React.FC = () => {
  const { userData } = React.useContext(UserContext);
  const { loading: connectionStatusLoading, data: connectionStatus, error: connectionStatusError } = useQuery<IConnectionStatusResponse>(GET_CONNECTION_STATUS, { fetchPolicy: 'cache-first' });
  const { loading: latestMatchLoading, data: latestMatch, error: latestMatchError } = useSubscription<ILatestMatchResponse>(SUBSCRIPTION_GET_LATEST_MATCH, { variables: { steamId: userData.steamId } });

  if (connectionStatusError || latestMatchError) {
    return (
      <DropDown>
        error
      </DropDown>
    );
  }

  if (connectionStatusLoading || latestMatchLoading) {
    return (
      <DropDown>
        loading
      </DropDown>
    );
  }

  function getStatus() {
    if (connectionStatus && connectionStatus?.lastKnownMatch !== null && connectionStatus?.matchmakingAuthCode !== null) {
      return 'Connected';
    }
    return <Button to="/csgo/settings/connections" variant="text">Connect now</Button>;
  }

  return (
    <DropDown>
      <span>Faceit: Connected</span>
      <span>Matchmaking: {getStatus()}</span>
      <span>Matches processed since last visit: 10</span>
      <Button to={`/csgo/match/${latestMatch.match.id}`} variant="default">Go to latest match</Button>
    </DropDown >
  );
};
