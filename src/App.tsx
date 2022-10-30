import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ColorGuess } from "./ColorGuesser/ColorGuesser";
import { GameProvider } from "./Context/GameContext";
import { theme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs" sx={{ paddingTop: "16px", paddingBottom: "16px" }}>
        <GameProvider>
          <ColorGuess />
        </GameProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
