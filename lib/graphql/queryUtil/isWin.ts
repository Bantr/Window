import { IRound } from 'lib/types/generated';

export function isWin(lastRound: IRound, steamId: string): boolean {
  if (lastRound?.winningTeam?.players.find((_) => _.player.steamId === steamId)) {
    return true;
  }
  return false;
}
