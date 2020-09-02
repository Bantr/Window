import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import { UserContext } from 'lib/context';
import { IPlayerAggregate } from 'lib/types/generated';
import { DBVISUAL } from 'lib/enums';
import { Card, Chart } from 'lib/components/dashboard';

// amount of players we track compared to amount of bans.
const GET_TRACKED_ACCOUNTS_WITH_BAN = gql`
  query GET_TRACKED_ACCOUNTS_WITH_BAN($steamId: String!) {
    players: player_aggregate(where: { trackedBy: {user: { steamId: {_eq: $steamId }}}}) {
    aggregate {
      count
    }
  },
    playersWithBan: player_aggregate (where: {trackedBy: {user: { steamId: {_eq: $steamId }}}, bans: {}}) {
    aggregate {
      count
    }
}}
`;

interface IResponse {
  players: IPlayerAggregate;
  playersWithBan: IPlayerAggregate;
}

export const BanRate: React.FC = () => {
  const { userData } = React.useContext(UserContext);
  const { loading, data, error } = useQuery<IResponse>(GET_TRACKED_ACCOUNTS_WITH_BAN, { variables: { steamId: userData.steamId } });

  function parseData(data: IResponse): any {
    return [
      { followed: data.players.aggregate.count, banned: data.playersWithBan.aggregate.count }
    ];
  }

  return (
    <Card center error={error} loading={loading} title="Ban rate" >
      <Chart data={data ? parseData(data) : null} keys={['followed', 'banned']} loading={loading} type={DBVISUAL.DONUT} />
    </Card>
  );
};
