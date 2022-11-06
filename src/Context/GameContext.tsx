import { createContext, useContext, useReducer } from "react";
import { ActionType } from "./ActionTypes";
import { GameReducer } from "./GameReducer";

export enum ColorMode {
  HEX = "Hex",
  RGB = "Rgb",
}

export enum GameMode {
  Freeplay = "Freeplay",
  ThreeRounds = "3 Rounds",
  FiveRounds = "5 Rounds",
  TenRounds = "10 Rounds",
  Red = "Red",
  Pink = "Pink",
  Purple = "Purple",
  DeepPurple = "Deep Purple",
  Indigo = "Indigo",
  Blue = "Blue",
  LightBlue = "Light Blue",
  Cyan = "Cyan",
  Teal = "Teal",
  Green = "Green",
  LightGreen = "Light Green",
  Lime = "Lime",
  Yellow = "Yellow",
  Amber = "Amber",
  Orange = "Orange",
  DeepOrange = "Deep Orange",
  Brown = "Brown",
  Grey = "Grey",
  BlueGrey = "Blue Grey",
}

export type Store = {
  answer: string;
  colors: Array<string>;
  isWrongAnswer: boolean;
  isCorrectAnswer: boolean;
  isRoundOver: boolean;
  colorMode: ColorMode;
  gameMode: GameMode;
  numberOfTimesPlayed: number;
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
  numberOfTimesPlayed: 0,
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
