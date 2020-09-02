export interface IKDA {
  kills: number;
  deaths: number;
  assists: number;
}
/*
  the function expects that rounds have 3 kills_aggregates named:
    - kills
    - deaths
    - assists
*/
// @ts-ignore
export function getKDA(rounds: IRound[]): IKDA {
  const kda = {
    kills: 0,
    deaths: 0,
    assists: 0
  };

  for (const round of rounds) {
    kda.kills = kda.kills + round.kills.aggregate.count;
    kda.deaths = kda.deaths + round.deaths.aggregate.count;
    kda.assists = kda.assists + round.assists.aggregate.count;
  }
  return kda;
}
