import { ActionType } from "../Context/ActionTypes";
import { Store, useGameContext } from "../Context/GameContext";
import { generateColorsWithAnswer } from "../GameUtils";

const CheckAnswer =
  (
    isRoundOver: Store["isRoundOver"],
    answer: Store["answer"],
    dispatch: ({ type, payload }: { type: ActionType; payload: string | boolean | string[] }) => void
  ) =>
  (color: string) => {
    if (isRoundOver) return;

    if (color === answer) {
      dispatch({ type: ActionType.SET_IS_WRONG, payload: false });
      dispatch({ type: ActionType.SET_IS_CORRECT, payload: true });
      dispatch({ type: ActionType.SET_ROUND_OVER, payload: true });
    } else {
      dispatch({ type: ActionType.SET_IS_WRONG, payload: true });
      dispatch({ type: ActionType.SET_IS_CORRECT, payload: false });
    }
  };

const RestartGame =
  (dispatch: ({ type, payload }: { type: ActionType; payload: string | boolean | string[] }) => void) =>
  () => {
    const { answer, colors } = generateColorsWithAnswer();
    dispatch({ type: ActionType.SET_ANSWER, payload: answer });
    dispatch({
      type: ActionType.SET_COLORS,
      payload: colors,
    });
    dispatch({ type: ActionType.SET_IS_WRONG, payload: false });
    dispatch({ type: ActionType.SET_IS_CORRECT, payload: false });
    dispatch({ type: ActionType.SET_ROUND_OVER, payload: false });
  };

export const useColorGuesser = () => {
  const { store, dispatch } = useGameContext();

  return {
    CheckAnswer: CheckAnswer(store.isRoundOver, store.answer, dispatch),
    RestartGame: RestartGame(dispatch),
  };
};
