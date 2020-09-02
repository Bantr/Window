import * as React from 'react';
import { useQuery } from '@apollo/client';
import GET_RECENT_MATCHES from 'lib/graphql/queries/getRecentMatches.gql';
import { Container, MatchesContainer, MatchesHeader, ErrorContainer } from './style';
import { Tile } from 'lib/components/dashboard';
import { InfoTooltip } from 'lib/components';
import { RecentMatchItem } from './recentMatchItem';
import { getMatchScore, isWin, getKDA } from 'lib/graphql/queryUtil';

/* Todo fix query types */
export const RecentMatches: React.FC<{ steamId: string }> = ({ steamId }) => {
  const { loading, data, error } = useQuery(GET_RECENT_MATCHES, { variables: { steamId } });
  const DateTooltipText = 'A matchmaking demo does not contain a timestamp of when the match took place. That is why we have chosen to use the timestamp of when the demo is processed, which will not be more than 15 minutes of its original end time. For new members, the matches we are able to process before you were registered will have an incorrect timestamp.';

  if (error) {
    return (
      <ErrorContainer>Something went wrong while fetching and processing the data! We are aware and are working on a solution!</ErrorContainer>
    );
  }

  function renderMatches() {
    if (data.matches.length) {
      return (data.matches.map(({ map, date, type, id, teams, rounds, lastRound }) => (
        <RecentMatchItem
          date={date}
          id={id}
          isWin={isWin(lastRound[0], steamId)} // rounds is ordered descending
          kda={getKDA(rounds)}
          key={`recent-match-${id}`}
          map={map}
          score={getMatchScore(teams)}
          type={type}
        />
      )));
    }
    return (<div>No matches</div>);
  }

  return (
    <Container>
      <Tile linkText="All matches" title="Match history" to={`csgo/profile/${steamId}/matches`} />
      <MatchesContainer>
        <MatchesHeader>
          <div>Map</div>
          <div>Source</div>
          <div>K  D  A</div>
          <div>ADR</div>
          <div>Date <InfoTooltip content={DateTooltipText} /></div>
          <div>Result</div>
          <div />
        </MatchesHeader>
        {
          loading ?
            ['1', '2', '3', '4', '5'].map((val) => (<RecentMatchItem key={`recent-match-placeholder-${val}`} loading />))
            : renderMatches()
        }
      </MatchesContainer>
    </Container>
  );
};
