import { Button, useTheme } from "@mui/material";
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
  const {
    store: { answer, isRoundOver },
  } = useGameContext();

  return (
    <>
      <Button
        startIcon={
          answer === color
            ? isRoundOver && <CheckIcon fontSize="large" color="success" />
            : isRoundOver && <CloseIcon fontSize="large" color="error" />
        }
        variant="contained"
        disableElevation={answer !== color && isRoundOver}
        disableFocusRipple={answer !== color && isRoundOver}
        disableRipple={answer !== color && isRoundOver}
        disableTouchRipple={answer !== color && isRoundOver}
        sx={{
          ":hover": {
            cursor: isRoundOver && answer !== color ? "default" : "pointer",
            backgroundColor: isRoundOver ? color : NeutralColors.Main,
          },
          "width": "100%",
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
