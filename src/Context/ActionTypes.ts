export enum ActionType {
  SET_ANSWER = "SET_ANSWER",
  SET_COLORS = "SET_COLORS",
  SET_IS_WRONG = "SET_IS_WRONG",
  SET_IS_CORRECT = "SET_IS_CORRECT",
  SET_ROUND_OVER = "SET_ROUND_OVER",
}

export interface AnswerAction {
  type: ActionType.SET_ANSWER;
  payload: string;
}

export interface ColorAction {
  type: ActionType.SET_COLORS;
  payload: Array<string>;
}

export interface WrongAnswerAction {
  type: ActionType.SET_IS_WRONG;
  payload: boolean;
}

export interface CorrectAnswerAction {
  type: ActionType.SET_IS_CORRECT;
  payload: boolean;
}

export interface RoundOverAction {
  type: ActionType.SET_ROUND_OVER;
  payload: boolean;
}

export type Action = ColorAction | AnswerAction | WrongAnswerAction | CorrectAnswerAction | RoundOverAction;
