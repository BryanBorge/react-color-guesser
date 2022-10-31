import { hexToRgb, rgbToHex } from "@mui/material";
import { ActionType, Action } from "./ActionTypes";
import { ColorMode, Store } from "./GameContext";

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
    case ActionType.SET_COLOR_MODE:
      if (action.payload === ColorMode.HEX) {
        return {
          ...store,
          colorMode: ColorMode.HEX,
          colors: store.colors?.map(color => rgbToHex(color)),
          answer: rgbToHex(store.answer),
        };
      } else {
        return {
          ...store,
          colorMode: ColorMode.RGB,
          colors: store.colors?.map(color => hexToRgb(color)),
          answer: hexToRgb(store.answer),
        };
      }
    default:
      return store;
  }
};
