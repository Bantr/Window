import { IMatch } from 'lib/types/generated';

export function getWinRate(wins: IMatch[], totalMatchCount: number): string {
  // Should show 50% if we do not track any of his matches.
  let winCount = 0;
  if (totalMatchCount === 0) {
    return '50%';
  }

  for (const win of wins) {
    if (win.rounds.length && win.rounds[0].winningTeam.players.length) {
      winCount++;
    }
  }

  // Should also show 50% if there were no wins yet, this is probably we don't track the rounds in the matches we processed.
  if (winCount === 0) {
    return '50%';
  }

  return `${Math.round(winCount / totalMatchCount)}%`;
}
