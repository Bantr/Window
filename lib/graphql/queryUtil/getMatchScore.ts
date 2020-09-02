import { IMatchTeamsTeam } from 'lib/types/generated';

export interface IMatchScore {
  winningScore: number;
  losingScore: number;
}

export function getMatchScore(teams: IMatchTeamsTeam[]): IMatchScore {
  // Older matches don't support teams yet.
  if (!teams.length) {
    return { winningScore: 0, losingScore: 0 };
  }

  const score1 = teams[0].team.roundsWon_aggregate.aggregate.count;
  const score2 = teams[1].team.roundsWon_aggregate.aggregate.count;
  return { winningScore: Math.max(score1, score2), losingScore: Math.min(score1, score2) };
}
