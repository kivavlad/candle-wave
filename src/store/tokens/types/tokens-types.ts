export interface IState {
  symbol: string;
  interval: string;
}

export type IAction =
  | {type: 'change-symbol', payload: string}
  | {type: 'change-interval', payload: string}