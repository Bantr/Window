import * as React from 'react';
import { IRound } from 'lib/types/generated';

interface IProps {
  round: IRound;
}

export const RoundScoreboard: React.FC<IProps> = ({ round }) => (
  <div> round {round}</div>
);
