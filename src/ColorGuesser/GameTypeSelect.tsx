import React from "react";
import { Stack, Chip, Tooltip } from "@mui/material";
import { GameMode, useGameContext } from "../Context/GameContext";
import { ActionType } from "../Context/ActionTypes";

type GameModeChip = {
  type: GameMode;
  tooltip: string;
};

const GameModes: Array<GameModeChip> = [
  {
    type: GameMode.Freeplay,
    tooltip: "Unlmited tries. Uses all colors",
  },
  {
    type: GameMode.ThreeRounds,
    tooltip: "3 round game. Uses all colors",
  },
  {
    type: GameMode.FiveRounds,
    tooltip: "5 round game. Uses all colors",
  },
  {
    type: GameMode.TenRounds,
    tooltip: "10 round game. Uses all colors",
  },
];

export const GameTypeSelect = () => {
  const [activeChip, setActiveChip] = React.useState<GameMode>(GameMode.Freeplay);
  const { store, dispatch } = useGameContext();

  const handleClick = (gameMode: GameModeChip) => {
    setActiveChip(gameMode.type);
    dispatch({ type: ActionType.SET_GAME_MODE, payload: gameMode.type });
  };

  return (
    <Stack direction="row" justifyContent="space-evenly" sx={{ paddingBottom: "16px", paddingTop: "16px" }}>
      {GameModes.map(gameMode => {
        return (
          <Tooltip key={gameMode.type} title={gameMode.tooltip}>
            <Chip
              variant={activeChip === gameMode.type ? "filled" : "outlined"}
              label={gameMode.type}
              onClick={() => handleClick(gameMode)}
            />
          </Tooltip>
        );
      })}
    </Stack>
  );
};
