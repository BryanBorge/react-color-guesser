import { ActionType, Action } from "./ActionTypes";
import { Store } from "./GameContext";

export const GameReducer = (store: Store, action: Action) => {
  switch (action.type) {
    case ActionType.SET_ANSWER:
      return { ...store, answer: action.payload };
    case ActionType.SET_COLORS:
      return { ...store, colors: action.payload };
    case ActionType.SET_IS_CORRECT:
      return { ...store, isCorrectAnswer: action.payload };
    case ActionType.SET_ROUND_OVER:
      return { ...store, isRoundOver: action.payload };
    case ActionType.SET_IS_WRONG:
      return { ...store, isWrongAnswer: action.payload };
    default:
      return store;
  }
};
