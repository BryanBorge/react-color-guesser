import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { GameProvider } from "./Context/GameContext";
import { GameWrapper } from "./GameWrapper";
import { themeWithResponsiveFontSizes } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={themeWithResponsiveFontSizes}>
      <Container maxWidth="xs">
        <GameProvider>
          <GameWrapper />
        </GameProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
