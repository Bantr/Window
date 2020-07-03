export interface IHistory {
  past: any[];
  present: any[];
  future: any[];
}

export enum ACTIONTYPES {
  UNDO = 'UNDO',
  REDO = 'REDO',
  SET = 'SET',
  CLEAR = 'CLEAR'
}

export const initialState: IHistory = {
  past: [],
  present: null,
  future: []
};

export interface IHistoryAction {
  type: ACTIONTYPES;
  payload?: any; // present
}
