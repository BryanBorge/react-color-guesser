import React from "react";
import { ColorGuess } from "./ColorGuesser/ColorGuesser";
import { ColorDisplayHeader } from "./Components/ColorDisplayHeader";
import { SideDrawer } from "./Components/SideDrawer";
import { GameMode, useGameContext } from "./Context/GameContext";
import { Typography, Box } from "@mui/material";

export const GameWrapper = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);

  const {
    store: { gameMode },
  } = useGameContext();

  return (
    <>
      <ColorDisplayHeader onClick={() => setIsDrawerOpen(true)} />
      {gameMode === GameMode.Freeplay ? (
        <ColorGuess />
      ) : (
        <Box display="flex" justifyContent="center" alignItems="center" height="150px">
          <Typography textAlign="center" variant="h6">
            {gameMode} coming soon
          </Typography>
        </Box>
      )}
      <SideDrawer onClick={() => setIsDrawerOpen(!isDrawerOpen)} isOpen={isDrawerOpen} />
    </>
  );
};
