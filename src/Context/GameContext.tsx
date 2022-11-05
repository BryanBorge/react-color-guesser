import { createContext, useContext, useReducer } from "react";
import { ActionType } from "./ActionTypes";
import { GameReducer } from "./GameReducer";

export enum ColorMode {
  HEX = "Hex",
  RGB = "Rgb",
}

export enum GameMode {
  Freeplay = "Freeplay",
  Rounds = "Rounds",
  SpecificColor = "Specific Color",
}

export type Store = {
  answer: string;
  colors: Array<string>;
  isWrongAnswer: boolean;
  isCorrectAnswer: boolean;
  isRoundOver: boolean;
  colorMode: ColorMode;
  gameMode: GameMode;
};

type GameContextType = {
  store: Store;
  dispatch({
    type,
    payload,
  }: {
    type: ActionType;
    payload: string | Array<string> | boolean | ColorMode | GameMode;
  }): void;
};

const initialState: Store = {
  answer: "",
  colors: [],
  isWrongAnswer: false,
  isCorrectAnswer: false,
  isRoundOver: false,
  colorMode: ColorMode.HEX,
  gameMode: GameMode.Freeplay,
};

export const GameProvider = ({ children }: { children: any }) => {
  const [store, dispatch] = useReducer(GameReducer, initialState);

  return <GameContext.Provider value={{ store, dispatch }}>{children}</GameContext.Provider>;
};

export const GameContext = createContext<GameContextType>({
  store: initialState,
  dispatch: () => {},
});

/**
 * Global state for the game
 * @returns
 */
export const useGameContext = (): GameContextType => useContext<GameContextType>(GameContext);
