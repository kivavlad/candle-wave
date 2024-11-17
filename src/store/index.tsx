import { useReducer, createContext } from "react";
import { IState, IAction } from "./tokens/types/tokens-types";
import { initialState, reducer } from "./tokens/reducer/tokent-reducer";

interface IProvider {
  children: React.ReactNode;
}

interface IContext {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}

export const StoreContext = createContext<IContext>({
  state: initialState,
  dispatch: () => {},
});

export const StoreProvider: React.FC<IProvider> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}