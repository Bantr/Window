import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from 'lib/context';
import { ErrorMessage } from 'lib/components';
import { IMatchAggregate, IKillAggregate, IMatch } from 'lib/types/generated';
import { Title, Button, InfoTooltip } from 'lib/components';
import { Person } from 'lib/icons';
import GET_STATS from 'lib/graphql/queries/getStats.gql';
import { useQuery } from '@apollo/client';
import { Container, Inner, StatContainer } from './style';
import { ERROR_MESSAGES } from 'lib/enums';
import { getKD, getWinRate } from 'lib/graphql/queryUtil';

interface IResponse {
  matches: IMatchAggregate;
  kills: IKillAggregate;
  deaths: IKillAggregate;
  wins: IMatch[];
}

export const Stats: React.FC = () => {
  const navigate = useNavigate();
  const { userData } = React.useContext(UserContext);
  const { loading, data, error } = useQuery<IResponse>(GET_STATS, { variables: { steamId: userData.steamId } });
  const tooltipText = 'If you are an early adopter these stats may not be accurate. In earlier stages we did not parse round data, so for some of these matches it is not possible to determine if it was a win. No worries this is temporary and will be reprocessed in a later version.';

  if (error) {
    return (
      <Container>
        <Title size="huge" type="h2">Your stats</Title>
        <ErrorMessage error={error} message={ERROR_MESSAGES.graphql} />
      </Container>
    );
  }

  return (
    <Container>
      <Title size="huge" type="h2">Your stats <InfoTooltip content={tooltipText} /></Title>
      <Inner>
        <Stat loading={loading} name="KD ratio" value={data ? getKD(data.kills.aggregate.count, data.deaths.aggregate.count) : null} />
        <Stat loading={loading} name="Headshot %" value={data ? getKD(data.kills.aggregate.count, data.deaths.aggregate.count) : null} />
        <Stat loading={loading} name="Win rate" value={data ? getWinRate(data.wins, data.matches.aggregate.count) : null} />
        <Stat loading={loading} name="Total matches" value={data ? data.matches.aggregate.count : null} />
        <Button icon={<Person />} onClick={() => { navigate('/csgo/profile'); }}>View profile</Button>
      </Inner>
    </Container>
  );
};

interface IProps {
  loading: boolean;
  name: string;
  value: number | string;
}

const Stat: React.FC<IProps> = ({ name, value, loading }) => (
  <StatContainer>
    <Title size="large" type="h3">{name}</Title>
    <span className={loading ? 'placeholder' : null}>{value}</span>
  </StatContainer>
);
