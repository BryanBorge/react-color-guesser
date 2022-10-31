import React, { useState } from "react";
import { Box, Grid, Stack, Typography, IconButton, Tooltip, useTheme } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { HelpDialog } from "../HelpDialog";
import { useColorGuesser } from "../ColorGuesser/useColorGuesser";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { ColorMode, useGameContext } from "../Context/GameContext";
import { ActionType } from "../Context/ActionTypes";

export const ColorDisplayHeader = () => {
  const {
    store: { colorMode },
    dispatch,
  } = useGameContext();
  const [helpDialogOpen, setHelpDialogOpen] = useState<boolean>(false);
  const { RestartGame } = useColorGuesser();

  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent) => {
    const mode: ColorMode = event.target.value as ColorMode;
    dispatch({ type: ActionType.SET_COLOR_MODE, payload: mode });
  };

  return (
    <>
      <Stack
        display="flex"
        justifyContent="space-between"
        direction="row"
        alignItems="center"
        mx={theme.spacing(1)}>
        <FormControl sx={{ minWidth: 120 }} size="small">
          <Select
            value={colorMode}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}>
            <MenuItem value={ColorMode.HEX}>Hex</MenuItem>
            <MenuItem value={ColorMode.RGB}>Rgb</MenuItem>
          </Select>
        </FormControl>
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
