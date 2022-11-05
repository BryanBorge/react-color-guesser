import { Box, Typography, Stack, IconButton, useTheme } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useColorGuesser } from "../ColorGuesser/useColorGuesser";
import { useGameContext } from "../Context/GameContext";
import Zoom from "@mui/material/Zoom";

/**
 * Display answer color. When round is over displays 'Correct!' text.
 * @returns
 */
export const ColorDisplay = () => {
  const { RestartGame } = useColorGuesser();
  const {
    store: { isCorrectAnswer, answer },
  } = useGameContext();
  const theme = useTheme();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: answer,
        height: "300px",
        width: "100%",
        borderRadius: 3,
      }}
      mb={3}>
      <Zoom in={isCorrectAnswer} mountOnEnter unmountOnExit>
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
          sx={{ ":hover": { cursor: "pointer" } }}
          onClick={() => RestartGame()}>
          <Typography variant="h4" sx={{ color: theme.palette.getContrastText(answer) }} py={2}>
            Correct!
          </Typography>
          <IconButton sx={{ color: theme.palette.getContrastText(answer) }} size="large">
            <RestartAltIcon fontSize="large" />
          </IconButton>
        </Stack>
      </Zoom>
    </Box>
  );
};
