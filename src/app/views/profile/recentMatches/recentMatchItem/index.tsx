import * as React from 'react';
import { Container, Item, ArrowContainer } from './style';
import { IMatchType } from '@bantr/lib/dist/types';
import { Arrow } from 'lib/icons';
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';
import { MatchTypeIcon } from 'lib/components';
import { IKDA, IMatchScore } from 'lib/graphql/queryUtil';

interface IProps {
  loading?: boolean;
  map?: string;
  id?: number;
  date?: string;
  type?: IMatchType;
  score?: IMatchScore;
  isWin?: boolean;
  kda?: IKDA;
}

export const RecentMatchItem: React.FC<IProps> = ({
  map,
  date,
  type,
  loading,
  id,
  isWin,
  score,
  kda
}) => {
  if (loading) {
    return (
      <Container>
        <Item className="placeholder" />
        <Item className="placeholder source" />
        <Item className="placeholder" />
        <Item className="placeholder" />
        <Item className="placeholder" />
        <Item className="placeholder" />
        <Item className="placeholder"><Arrow /></Item>
      </Container>
    );
  }

  return (
    <Link to={`csgo/match/${id}`} >
      <Container>
        <Item>{map}</Item>
        <Item><MatchTypeIcon matchType={type} /></Item>
        <Item className="kda"><span>{kda.kills}</span> <span>{kda.deaths}</span> <span>{kda.assists}</span></Item>
        <Item> soon </Item>
        <Item>{DateTime.fromISO(date).toLocaleString({ day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit', hour12: true })}</Item>
        <Item className={isWin ? 'score win' : 'score'}>{score.winningScore} - {score.losingScore}</Item>
        <ArrowContainer><Arrow pointer /></ArrowContainer>
      </Container>
    </Link>
  );
};
