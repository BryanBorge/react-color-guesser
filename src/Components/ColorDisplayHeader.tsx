import React, { useState } from "react";
import { Stack, IconButton, useTheme, Chip } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { HelpDialog } from "../HelpDialog";
import { useColorGuesser } from "../ColorGuesser/useColorGuesser";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { ColorMode, useGameContext } from "../Context/GameContext";
import { ActionType } from "../Context/ActionTypes";

type ColorModeChip = {
  type: ColorMode;
};

const ColorModes = [{ type: ColorMode.HEX }, { type: ColorMode.RGB }];

//Dispatch action to set color mode
const handleClick = (
  colorMode: ColorModeChip,
  setActiveChip: (value: React.SetStateAction<ColorMode>) => void,
  dispatch: ({ type, payload }: { type: ActionType; payload: string | boolean | string[] }) => void
) => {
  setActiveChip(colorMode.type);
  dispatch({ type: ActionType.SET_COLOR_MODE, payload: colorMode.type });
};

/**
 * Displays color mode chips, help and restart buttons
 * @returns
 */
export const ColorDisplayHeader = () => {
  const {
    store: { colorMode },
    dispatch,
  } = useGameContext();
  const [helpDialogOpen, setHelpDialogOpen] = useState<boolean>(false);
  const [activeChip, setActiveChip] = React.useState<ColorMode>(colorMode);
  const { RestartGame } = useColorGuesser();

  const theme = useTheme();

  return (
    <>
      <Stack
        display="flex"
        justifyContent="space-between"
        direction="row"
        alignItems="center"
        mx={theme.spacing(1)}>
        <Stack direction="row" spacing={1}>
          {ColorModes.map(colorMode => {
            return (
              <Chip
                key={colorMode.type}
                color="neutral"
                variant={activeChip === colorMode.type ? "filled" : "outlined"}
                label={colorMode.type}
                onClick={() => handleClick(colorMode, setActiveChip, dispatch)}
              />
            );
          })}
        </Stack>
        <Stack display="flex" justifyContent="flex-end" direction="row">
          <IconButton onClick={() => setHelpDialogOpen(true)} sx={{ marginTop: "8px", marginBottom: "8px" }}>
            <HelpOutlineIcon />
          </IconButton>
          <IconButton onClick={() => RestartGame()} sx={{ marginTop: "8px", marginBottom: "8px" }}>
            <RestartAltIcon />
          </IconButton>
        </Stack>
      </Stack>
      <HelpDialog open={helpDialogOpen} handleClose={() => setHelpDialogOpen(false)} />
    </>
  );
};
