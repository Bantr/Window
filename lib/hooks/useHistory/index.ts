/*
  Will be used when adding and removing items from canvas on tactical board.
  This will add functionality to undo and redo certain steps.
*/

import * as React from 'react';
import { reducer } from './reducer';
import { ACTIONTYPES, initialState } from './types';

// const {..., set, undo, ...} = useHistory(initialPresent)
export function useHistory(initialPresent: any[]): any {
  const [state, dispatch] = React.useReducer(reducer, { ...initialState, present: initialPresent });

  const canUndo = state.past.length !== 0;
  const canRedo = state.future.length !== 0;

  const undo = React.useCallback(() => {
    if (canUndo) { dispatch({ type: ACTIONTYPES.UNDO }); }
  }, [canUndo, dispatch]);

  const redo = React.useCallback(() => {
    if (canRedo) { dispatch({ type: ACTIONTYPES.REDO }); }
  }, [canRedo, dispatch]);

  const set = React.useCallback((newPresent) => dispatch({ type: ACTIONTYPES.SET, payload: newPresent }), []);
  const clear = React.useCallback(() => dispatch({ type: ACTIONTYPES.CLEAR, payload: initialPresent }), []);

  // If needed we could also return past and future state.
  return { state: state.present, set, undo, redo, clear, canUndo, canRedo };
}
