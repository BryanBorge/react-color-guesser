import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Stack, IconButton, useTheme, Typography, Drawer } from "@mui/material";
import { List, ListItemText, ListItemButton, ListItemIcon, Collapse } from "@mui/material";
import { GameMode, useGameContext } from "../Context/GameContext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
} from "@mui/material/colors";
import { ActionType } from "../Context/ActionTypes";

const Colors = [
  { color: red[500], text: "Red" },
  { color: pink[500], text: "Pink" },
  { color: purple[500], text: "Purple" },
  { color: deepPurple[500], text: "Deep Purple" },
  { color: indigo[500], text: "Indigo" },
  { color: blue[500], text: "Blue" },
  { color: lightBlue[500], text: "Light Blue" },
  { color: cyan[500], text: "Cyan" },
  { color: teal[500], text: "Teal" },
  { color: green[500], text: "Green" },
  { color: lightGreen[500], text: "Light Green" },
  { color: lime[500], text: "Lime" },
  { color: yellow[500], text: "Yellow" },
  { color: amber[500], text: "Amber" },
  { color: orange[500], text: "Orange" },
  { color: deepOrange[500], text: "Deep Orange" },
  { color: brown[500], text: "Brown" },
  { color: grey[500], text: "Grey" },
  { color: blueGrey[500], text: "Blue Grey" },
];

export const SideDrawer = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  const [showColors, setShowcolors] = React.useState<boolean>(false);
  const theme = useTheme();
  const {
    store: { gameMode },
    dispatch,
  } = useGameContext();

  return (
    <Drawer anchor="left" open={isOpen} onClose={onClick} sx={{}}>
      <Stack sx={{ minWidth: "200px", width: "100%", padding: theme.spacing(1) }} spacing={2}>
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          sx={{ marginRight: theme.spacing(1), minWidth: 250, padding: theme.spacing(1) }}>
          <Typography variant="h4">Menu</Typography>

          <IconButton onClick={onClick}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Stack>
          <List disablePadding>
            {[GameMode.Freeplay, GameMode.ThreeRounds, GameMode.FiveRounds, GameMode.TenRounds].map(mode => {
              return (
                <ListItemButton
                  key={mode}
                  sx={{ borderLeft: mode === gameMode ? "2px solid blue" : "none" }}
                  onClick={() => {
                    dispatch({ type: ActionType.SET_GAME_MODE, payload: mode });
                  }}>
                  <ListItemText>{mode}</ListItemText>
                </ListItemButton>
              );
            })}
            <ListItemButton onClick={() => setShowcolors(!showColors)}>
              <ListItemText>Colors</ListItemText>
              {showColors ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
            <Collapse in={showColors}>
              <List disablePadding sx={{ paddingLeft: theme.spacing(3) }}>
                {Colors.map(color => {
                  return (
                    <ListItemButton
                      key={color.color}
                      onClick={() => {
                        dispatch({ type: ActionType.SET_GAME_MODE, payload: color.text });
                      }}
                      sx={{ borderLeft: color.text === gameMode ? "2px solid blue" : "none" }}>
                      <ListItemIcon sx={{ color: color.color }}>
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText>{color.text}</ListItemText>
                    </ListItemButton>
                  );
                })}
              </List>
            </Collapse>
          </List>
        </Stack>
      </Stack>
    </Drawer>
  );
};
