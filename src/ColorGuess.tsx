import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
import { useState, useEffect } from "react";
import { NeutralColors } from "./Theme";
import { useRandomColor } from "./useRandomColor";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

export const ColorGuess = () => {
  const { answer, colors, generateColorsWithAnswer } = useRandomColor();
  const [isWrongAnswer, setIsWrongAnswer] = useState<boolean | undefined>();
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | undefined>();
  const [isRoundOver, setIsRoundOver] = useState<boolean>(false);
  const theme = useTheme();

  const restartGame = () => {
    generateColorsWithAnswer();
    setIsWrongAnswer(undefined);
    setIsCorrectAnswer(undefined);
    setIsRoundOver(false);
  };

  useEffect(() => {
    restartGame();
  }, []);

  const onColorClick = (color: string) => {
    if (isRoundOver) return;

    if (color === answer) {
      setIsWrongAnswer(false);
      setIsCorrectAnswer(true);
      setIsRoundOver(true);
    } else {
      setIsWrongAnswer(true);
      setIsCorrectAnswer(false);
    }
  };

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'>
      <Box
        sx={{
          backgroundColor: answer,
          height: "400px",
          width: "100%",
          borderRadius: 3,
        }}
        mb={3}
      />
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'>
        <Grid container spacing={2}>
          {colors?.map((color: string) => {
            return (
              <Grid item xs={6}>
                <Button
                  startIcon={
                    answer === color
                      ? isRoundOver && (
                          <CheckIcon fontSize='large' color='success' />
                        )
                      : isRoundOver && (
                          <CloseIcon fontSize='large' color='error' />
                        )
                  }
                  variant='contained'
                  disableElevation={answer !== color && isRoundOver}
                  disableFocusRipple={answer !== color && isRoundOver}
                  disableRipple={answer !== color && isRoundOver}
                  disableTouchRipple={answer !== color && isRoundOver}
                  sx={{
                    ":hover": {
                      cursor:
                        isRoundOver && answer !== color ? "default" : "pointer",
                      backgroundColor: isRoundOver ? color : NeutralColors.Main,
                    },
                    width: "100%",
                    height: 50,
                    borderRadius: 3,
                    backgroundColor: isRoundOver ? color : NeutralColors.Main,
                    color: isRoundOver
                      ? theme.palette.getContrastText(color)
                      : NeutralColors.ContrastText,
                  }}
                  color={!isRoundOver ? "neutral" : "inherit"}
                  onClick={() => onColorClick(color)}>
                  {color}
                </Button>
              </Grid>
            );
          })}
        </Grid>
        {isWrongAnswer && (
          <Typography color='error' variant='h5' py={2}>
            Incorrect...
          </Typography>
        )}
        {isCorrectAnswer && (
          <Tooltip title='Start a new round' placement='bottom'>
            <Stack
              alignItems='center'
              direction='row'
              spacing={1}
              onClick={restartGame}
              sx={{ ":hover": { cursor: "pointer" } }}>
              <Typography variant='h5' color='success.main' py={2}>
                Correct!
              </Typography>
              <IconButton color='success' onClick={restartGame}>
                <RestartAltIcon />
              </IconButton>
            </Stack>
          </Tooltip>
        )}
      </Box>
    </Box>
  );
};
