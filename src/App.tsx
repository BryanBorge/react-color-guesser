import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ColorGuess } from "./ColorGuess";
import { theme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ paddingTop: "16px", paddingBottom: "16px" }}>
        <ColorGuess />
      </Container>
    </ThemeProvider>
  );
}

export default App;
