import { Stack, IconButton, useTheme, Typography, Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";

export const HelpDialog = ({ open, handleClose }: { open: boolean; handleClose: () => void }) => {
  const theme = useTheme();
  return (
    <Dialog open={open}>
      <Stack
        justifyContent="space-between"
        direction="row"
        alignItems="center"
        sx={{ marginRight: theme.spacing(1) }}>
        <DialogTitle>Help</DialogTitle>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <DialogContent>
        <Stack spacing={5}>
          <Stack>
            <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
              Hexadecimal Colors
            </Typography>
            <Typography gutterBottom variant="body1" sx={{ paddingBottom: theme.spacing(1) }}>
              A hex color code is a 6-symbol code made of up to three 2-symbol elements. Each of the 2-symbol
              elements expresses a red, green and blue color value from 0 to 255. Take a look at this color:
            </Typography>
            {/* C075d5 */}
            <Stack>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ paddingBottom: theme.spacing(1) }}>
                <Box sx={{ height: "50px", width: "50px", backgroundColor: "#C075D5" }} />
                <Typography gutterBottom variant="body1">
                  #C075D5
                </Typography>
              </Stack>
              <Typography gutterBottom variant="body1" sx={{ display: "flex" }}>
                The Red element here is C0
              </Typography>
              <Typography gutterBottom variant="body1" sx={{ display: "flex" }}>
                The Green element here is 75
              </Typography>
              <Typography gutterBottom variant="body1" sx={{ display: "flex" }}>
                The Blue element here is D5
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
              RGB Colors
            </Typography>
            <Typography variant="body1">More stuff down here</Typography>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
