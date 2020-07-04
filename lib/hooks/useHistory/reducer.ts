import { IHistory, ACTIONTYPES, initialState, IHistoryAction } from './types';

export const reducer = (state: IHistory, action: IHistoryAction): IHistory => {
  const { past, present, future } = state;

  switch (action.type) {
    case ACTIONTYPES.UNDO:
      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);
      return {
        past: newPast,
        present: previous,
        future: [present, ...future]
      };

    case ACTIONTYPES.REDO:
      const next = future[0];
      const newFuture = future.slice(1);

      return {
        past: [...past, present],
        present: next,
        future: newFuture
      };

    case ACTIONTYPES.SET:
      const newPresent = action.payload.present;
      if (newPresent === present) {
        return state;
      }
      return {
        past: [...past, present],
        present: newPresent,
        future: []
      };
    case ACTIONTYPES.CLEAR:
      const initialPresent = action.payload.present;
      return {
        ...initialState,
        present: initialPresent
      };
  }
};
