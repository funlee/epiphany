import * as actionTypes from './actionTypes';
interface IAction {
  type: string;
  counterCaption: string;
}
interface IState {
  [peopName: string]: any;
}

export default (state: IState, action: IAction) => {
  const { counterCaption } = action;

  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, [counterCaption]: state[counterCaption] + 1};
    case actionTypes.DECREMENT:
      return { ...state, [counterCaption]: state[counterCaption] - 1 };
    default:
      return state;
  }
}
