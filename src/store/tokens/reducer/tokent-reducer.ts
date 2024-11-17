import { IState } from "../types/tokens-types";
import { IAction } from "../types/tokens-types";

const initialState: IState = {
  symbol: "BTC",
  interval: '1m'
}

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'change-symbol':
      return {...state, symbol: action.payload};

    case 'change-interval':
      return {...state, interval: action.payload};

    default:
      return state;
  }
}

export { 
  initialState, 
  reducer 
}