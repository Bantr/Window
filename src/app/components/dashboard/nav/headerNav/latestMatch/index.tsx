import * as React from 'react';
import { useSubscription } from '@apollo/client';
import SUBSCRIPTION_GET_LATEST_MATCH from 'lib/graphql/subscriptions/getLatestMatch.gql';
import { Container } from './style';
import { UserContext } from 'lib/context';
import { Radio } from 'lib/icons';
import { IMatch } from 'lib/types/generated';
import { DateTime } from 'luxon';

interface IResponse {
  match: IMatch[];
}

interface IProps {
  onClick: () => void;
}

export const LatestMatch: React.FC<IProps> = ({ onClick, children }) => {
  const { userData } = React.useContext(UserContext);
  const { loading, data, error } = useSubscription<IResponse>(SUBSCRIPTION_GET_LATEST_MATCH, { variables: { steamId: userData.steamId } });

  if (error) {
    return null;
  }

  if (loading || !data) {
    return (
      <Container className="placeholder" />
    );
  }

  return (
    <Container onClick={onClick}>
      {
        data.match.length ?
          <span>Last match: {DateTime.fromISO(data.match[0].date).toLocaleString(DateTime.DATE_MED)} </span>
          : <span>No matches detected</span>
      }
      <Radio pointer />
      {children} { /* this is an absolute dom element */}
    </Container >
  );
};
