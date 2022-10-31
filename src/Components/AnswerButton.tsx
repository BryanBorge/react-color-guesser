import { Button, useTheme, useMediaQuery } from "@mui/material";
import { NeutralColors } from "../Theme";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useGameContext } from "../Context/GameContext";

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

  return (
    <>
      <Button
        size={smallAndDown ? "small" : "medium"}
        startIcon={
          answer === color
            ? isRoundOver && <CheckIcon fontSize="large" color="success" />
            : isRoundOver && <CloseIcon fontSize="large" color="error" />
        }
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
    </>
  );
};
