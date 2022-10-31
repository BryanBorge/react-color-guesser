import { createContext, useContext, useReducer } from "react";
import { ActionType } from "./ActionTypes";
import { GameReducer } from "./GameReducer";

export enum ColorMode {
  HEX = "Hex",
  RGB = "Rgb",
}

export type Store = {
  answer: string;
  colors: Array<string>;
  isWrongAnswer: boolean;
  isCorrectAnswer: boolean;
  isRoundOver: boolean;
  colorMode: ColorMode;
};

type GameContextType = {
  store: Store;
  dispatch({
    type,
    payload,
  }: {
    type: ActionType;
    payload: string | Array<string> | boolean | ColorMode;
  }): void;
};

const initialState: Store = {
  answer: "",
  colors: [],
  isWrongAnswer: false,
  isCorrectAnswer: false,
  isRoundOver: false,
  colorMode: ColorMode.HEX,
};

export const GameProvider = ({ children }: { children: any }) => {
  const [store, dispatch] = useReducer(GameReducer, initialState);

  return <GameContext.Provider value={{ store, dispatch }}>{children}</GameContext.Provider>;
};

export const GameContext = createContext<GameContextType>({
  store: initialState,
  dispatch: () => {},
});

export const useGameContext = (): GameContextType => useContext<GameContextType>(GameContext);
