import { Box, Grid, Stack, Typography, IconButton, Tooltip } from "@mui/material";
import { useEffect } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useGameContext } from "../Context/GameContext";
import { AnswerButton } from "../Components/AnswerButton";
import { ColorDisplay } from "../Components/ColorDisplay";
import { useColorGuesser } from "./useColorGuesser";
import { ColorDisplayHeader } from "../Components/ColorDisplayHeader";

export const ColorGuess = () => {
  const {
    store: { answer, colors, isWrongAnswer, isCorrectAnswer },
  } = useGameContext();
  const { RestartGame, CheckAnswer } = useColorGuesser();

  useEffect(() => {
    RestartGame();
  }, []);

  return (
    <>
      <ColorDisplayHeader />
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <ColorDisplay answer={answer} />
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Grid container spacing={2}>
            {colors?.map((color: string) => {
              return (
                <Grid item xs={6} key={color}>
                  <AnswerButton color={color} onClick={() => CheckAnswer(color)} />
                </Grid>
              );
            })}
          </Grid>
          {isWrongAnswer && (
            <Typography color="error" variant="h5" py={2}>
              Try Again
            </Typography>
          )}
          {isCorrectAnswer && (
            <Tooltip title="Start a new round" placement="bottom">
              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
                onClick={() => RestartGame()}
                sx={{ ":hover": { cursor: "pointer" } }}>
                <Typography variant="h5" color="success.main" py={2}>
                  Correct!
                </Typography>
                <IconButton color="success" onClick={() => RestartGame()}>
                  <RestartAltIcon />
                </IconButton>
              </Stack>
            </Tooltip>
          )}
        </Box>
      </Box>
    </>
  );
};
