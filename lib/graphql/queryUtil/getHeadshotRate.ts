import { IKillAggregate } from 'lib/types/generated';

export function getHeadshotRate(headshotKills: IKillAggregate, kills: IKillAggregate): string {
  return `${headshotKills.aggregate.count / kills.aggregate.count * 100}%`;
}
