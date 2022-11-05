import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ColorGuess } from "./ColorGuesser/ColorGuesser";
import { GameProvider } from "./Context/GameContext";
import { themeWithResponsiveFontSizes } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={themeWithResponsiveFontSizes}>
      <Container maxWidth="xs">
        <GameProvider>
          <ColorGuess />
        </GameProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
