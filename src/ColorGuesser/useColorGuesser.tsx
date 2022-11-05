import { ActionType } from "../Context/ActionTypes";
import { ColorMode, Store, useGameContext } from "../Context/GameContext";
import { generateColorsWithAnswer } from "../GameUtils";

/**
 * Curried function that checks if selected color is the correct answer
 *
 * @param isRoundOver boolean
 * @param answer string
 * @param dispatch  ({ type, payload }: { type: ActionType; payload: string | boolean | string[] })
 * @param color string
 * @returns
 */
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

/**
 * Curried function to reset state and generate new colors and answer
 * @param colorMode ColorMode
 * @param dispatch ({ type, payload }: { type: ActionType; payload: string | boolean | string[] })
 * @returns
 */
const RestartGame =
  (
    colorMode: ColorMode,
    dispatch: ({ type, payload }: { type: ActionType; payload: string | boolean | string[] }) => void
  ) =>
  () => {
    const { answer, colors } = generateColorsWithAnswer();
    dispatch({ type: ActionType.SET_ANSWER, payload: answer });
    dispatch({
      type: ActionType.SET_COLORS,
      payload: colors,
    });
    dispatch({ type: ActionType.SET_COLOR_MODE, payload: colorMode });
    dispatch({ type: ActionType.SET_IS_WRONG, payload: false });
    dispatch({ type: ActionType.SET_IS_CORRECT, payload: false });
    dispatch({ type: ActionType.SET_ROUND_OVER, payload: false });
  };

/**
 * Hook to manage game state
 *
 * @returns CheckAnswer, RestartGame
 */
export const useColorGuesser = () => {
  const { store, dispatch } = useGameContext();

  return {
    CheckAnswer: CheckAnswer(store.isRoundOver, store.answer, dispatch),
    RestartGame: RestartGame(store.colorMode, dispatch),
  };
};
