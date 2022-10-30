import { Box, Grid, Stack, Typography, IconButton, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useGameContext } from "../Context/GameContext";
import { AnswerButton } from "../Components/AnswerButton";
import { ColorDisplay } from "../Components/ColorDisplay";
import { useColorGuesser } from "./useColorGuesser";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useTheme } from "@mui/material";
import { HelpDialog } from "../HelpDialog";
export const ColorGuess = () => {
  const [helpDialogOpen, setHelpDialogOpen] = useState<boolean>(false);
  const {
    store: { answer, colors, isWrongAnswer, isCorrectAnswer },
  } = useGameContext();
  const { RestartGame, CheckAnswer } = useColorGuesser();
  const theme = useTheme();
  useEffect(() => {
    RestartGame();
  }, []);

  return (
    <>
      <Stack
        display="flex"
        justifyContent="space-between"
        direction="row"
        alignItems="center"
        mx={theme.spacing(1)}>
        <Typography variant="body2">HEX</Typography>
        <Stack display="flex" justifyContent="flex-end" direction="row">
          <IconButton onClick={() => setHelpDialogOpen(true)} sx={{ marginTop: "8px", marginBottom: "8px" }}>
            <HelpOutlineIcon />
          </IconButton>
          <IconButton onClick={() => RestartGame()} sx={{ marginTop: "8px", marginBottom: "8px" }}>
            <RestartAltIcon />
          </IconButton>
        </Stack>
      </Stack>
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
              Incorrect...
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
      <HelpDialog open={helpDialogOpen} handleClose={() => setHelpDialogOpen(false)} />
    </>
  );
};
