import { createContext, useContext, useReducer } from "react";

import Reducer, { Action, ActionType } from "./reducer";

const defaultState = {
  apiKey: "",
};

const ApiKeysProvider = (props) => {
  // user prop retrieved from withAuthSSR
  const { children } = props;

  const [state, dispatch] = useReducer(Reducer, defaultState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const Context = createContext({ state: defaultState });
export const useApiKeyContext = () => useContext(Context);

export default ApiKeysProvider;
