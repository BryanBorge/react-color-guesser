import { createContext, useContext, useReducer } from "react";
import { ActionType } from "./ActionTypes";
import { GameReducer } from "./GameReducer";

export type Store = {
  answer?: string;
  colors?: Array<string>;
  isWrongAnswer: boolean;
  isCorrectAnswer: boolean;
  isRoundOver: boolean;
};

type GameContextType = {
  store: Store;
  dispatch({ type, payload }: { type: ActionType; payload: string | Array<string> | boolean }): void;
};

const initialState: Store = {
  answer: undefined,
  colors: undefined,
  isWrongAnswer: false,
  isCorrectAnswer: false,
  isRoundOver: false,
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
