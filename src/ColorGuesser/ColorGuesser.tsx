import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { useGameContext } from "../Context/GameContext";
import { AnswerButton } from "../Components/AnswerButton";
import { ColorDisplay } from "../Components/ColorDisplay";
import { useColorGuesser } from "./useColorGuesser";

/**
 * Main game component
 * @returns
 */
export const ColorGuess = () => {
  const {
    store: { colors, answer },
  } = useGameContext();

  const { RestartGame, CheckAnswer } = useColorGuesser();

  useEffect(() => {
    RestartGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!answer || !colors) {
    return <></>;
  }

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <ColorDisplay />
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Grid container spacing={2}>
            {colors?.map((color: string) => {
              return (
                <Grid item xs={12} sm={6} key={color}>
                  <AnswerButton color={color} onClick={() => CheckAnswer(color)} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
