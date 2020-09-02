import * as React from 'react';
import { IMatchType } from '@bantr/lib/dist/types';
import { Steam, Faceit } from 'lib/icons';

interface IProps {
  matchType: IMatchType
  originalColor?: boolean
}

export const MatchTypeIcon: React.FC<IProps> = ({ matchType }) => {
  switch (matchType) {
    case IMatchType.CSGOFaceIt:
    case IMatchType.CSGOFaceItPremium:
    case IMatchType.Other: return (<Faceit fill="#f65503" pointer />);
    case 1: return (<Steam pointer />);
    default: return (<>/</>);
  }
};
