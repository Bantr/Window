import * as React from 'react';
import { Chart } from 'lib/components/dashboard';
import { DBVISUAL } from 'lib/enums';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import * as Sentry from '@sentry/react';

interface IPlayerData {
  players: IAggregateResult;
  playersWithBan: IAggregateResult;

}
interface IAggregateResult {
  aggregate: { count: number };
}

const GET_TRACKED_ACCOUNTS_WITH_BAN = gql`
  query GET_TRACKED_ACCOUNTS_WITH_BAN{
    players: player_aggregate(where: { followedBy: {userId: {_eq: $userId}}}) {
    aggregate {
      count
    }
  },
    playersWithBan: player_aggregate (where: {followedBy: {userId: {_eq: $userId}}, bans: {}}) {
    aggregate {
      count
    }
  }
  }
`;

export const BannedPlayersDonut: React.FC = () => {
  const { loading, error, data } = useQuery<IPlayerData>(GET_TRACKED_ACCOUNTS_WITH_BAN);

  // TODO: fix decent error handling (show error on component?)
  // TODO: create type for trackedAccount
  function parseData(queryResult: IPlayerData): Array<{ [key: string]: any }> {
    const data = [
      { 'followed': queryResult.players.aggregate.count },
      { 'banned': queryResult.players.aggregate.count }
    ];
    return data;
  }

  if (error) {
    // TODO: notify user there was an error, show adapted component.
    Sentry.captureException(error);
  }

  if (loading) {
    return <div>loading..</div>;
  }

  if (!loading) {
    return (
      <Chart chartId="BannedPlayersDonut" data={parseData(data)} keys={['followed', 'banned']} showLegend={true} title="Banned players" type={DBVISUAL.DONUT} />
    );
  }
};
