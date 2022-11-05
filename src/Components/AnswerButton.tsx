import React from "react";
import { Button, useTheme, useMediaQuery, Grow, Slide, Typography } from "@mui/material";
import { NeutralColors } from "../Theme";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import { useGameContext } from "../Context/GameContext";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import { Stack } from "@mui/system";
type AnswerButtonProps = {
  color: string;
  onClick: () => void;
};

export const AnswerButton = ({ color, onClick }: AnswerButtonProps) => {
  const theme = useTheme();
  const smallAndDown = useMediaQuery(theme.breakpoints.down("sm"));
  const {
    store: { answer, isRoundOver },
  } = useGameContext();
  const stackRef = React.useRef(null);

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} ref={stackRef}>
        {answer === color && isRoundOver && (
          <Slide direction="right" in={answer === color && isRoundOver} container={stackRef.current}>
            <CheckCircleTwoToneIcon fontSize="medium" color="success" />
          </Slide>
        )}
        {answer !== color && isRoundOver && (
          <Slide direction="right" in={answer !== color && isRoundOver} container={stackRef.current}>
            <CancelTwoToneIcon fontSize="medium" color="error" />
          </Slide>
        )}
        <Button
          size={smallAndDown ? "small" : "medium"}
          variant="contained"
          // Disable hover and pointer on incorrect options at the end of the round
          // so that only the correct answer is "clickable"
          disableElevation={answer !== color && isRoundOver}
          disableFocusRipple={answer !== color && isRoundOver}
          disableRipple={answer !== color && isRoundOver}
          disableTouchRipple={answer !== color && isRoundOver}
          fullWidth
          sx={{
            ":hover": {
              cursor: isRoundOver && answer !== color ? "default" : "pointer",
              backgroundColor: isRoundOver ? color : NeutralColors.Main,
            },
            "height": 50,
            "borderRadius": 3,
            "backgroundColor": isRoundOver ? color : NeutralColors.Main,
            "color": isRoundOver ? theme.palette.getContrastText(color) : NeutralColors.ContrastText,
          }}
          color={!isRoundOver ? "neutral" : "inherit"}
          onClick={() => onClick()}>
          {color}
        </Button>
      </Stack>
    </>
  );
};
