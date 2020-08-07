import * as React from 'react';

export interface IUserContext {
  userData: IUserData;
  setUserData: React.Dispatch<IUserData>;
}

export interface IUserData {
  id: string | null;
  username: string | null;
  steamId: string | null;
  steamAvatar: string | null;
  steamProfile: string | null;
  steamUsername: string | null;
  discordId: string | null;
  discordUsername: string | null;
  faceitId: string | null;
  graphQLKey: string;
}

export const UserContext = React.createContext<Partial<IUserContext>>({});
