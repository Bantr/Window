import * as React from 'react';
import { useSubscription } from '@apollo/client';
import { Title, LiveTag } from 'lib/components';
import { Container, FeedContainer, FeedItemContainer, Inner } from './style';
import gql from 'graphql-tag';
import { IPlayerAggregate, IMatchAggregate } from 'lib/types/generated';

const SUBSCRIPTION_GET_PLAYER_COUNT = gql`
  subscription GET_PLAYER_COUNT{
    players: player_aggregate{
      aggregate {
        count
      }
    }
  }
`;

const SUBSCRIPTION_GET_MATCH_COUNT = gql`
  subscription GET_MATCH_COUNT{
    matches: match_aggregate{
      aggregate {
        count
      }
    }
  }
`;

interface IPlayerCountResponse {
  players: IPlayerAggregate;
}
interface IMatchCountResponse {
  matches: IMatchAggregate;
}

export const DataFeed: React.FC = () => {
  const { data: playerCount, loading: playerLoading, error: playerError } = useSubscription<IPlayerCountResponse>(SUBSCRIPTION_GET_PLAYER_COUNT);
  const { data: matchCount, loading: matchLoading, error: matchError } = useSubscription<IMatchCountResponse>(SUBSCRIPTION_GET_MATCH_COUNT);

  if (playerError || matchError) {
    return (
      <Container>
        <Inner>
          <Title size="massive" type="h2">We track everything.</Title>
          <FeedContainer>
            <span>something went wrong while fetching the data :/</span>
          </FeedContainer>
        </Inner>
      </Container>
    );
  }

  if (playerLoading || matchLoading) {
    return (
      <Container>
        <Inner>
          <Title size="massive" type="h2">We track everything.</Title>
          <FeedContainer className="placeholder" />
        </Inner>
      </Container>
    );
  }

  return (
    <Container>
      <Inner>
        <Title size="massive" type="h2">We track everything.</Title>
        <FeedContainer>
          <LiveTag position={{ top: '-50px', right: '0' }} text="LIVE DATA" />
          <FeedItem amount={playerCount.players.aggregate.count} text="Players tracked" />
          <FeedItem amount={matchCount.matches.aggregate.count} text="matches processed" />
        </FeedContainer>
      </Inner>
    </Container>
  );
};

interface IProps {
  amount: number;
  text: string;
}
const FeedItem: React.FC<IProps> = ({ amount, text }) => (
  <FeedItemContainer>
    <div className="amount">{amount}</div>
    <div className="text">{text}</div>
  </FeedItemContainer>
);
