import React, { createContext, useReducer, useContext } from 'react';
import { initialState, stateReducer, type State, type Action } from './stateReducer';

type ContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
}

type StateProviderProps = {
    children: React.ReactNode;
}

export const StateContext = createContext<ContextType | undefined>(undefined);

export const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = (): ContextType => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useStateValue must be used within a StateProvider');
  }
  return context;
};