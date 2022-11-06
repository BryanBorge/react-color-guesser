import { Stack, IconButton, useTheme, Typography, Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";

export const HelpDialog = ({ open, handleClose }: { open: boolean; handleClose: () => void }) => {
  const theme = useTheme();
  return (
    <Dialog open={open} maxWidth="lg">
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
        <Stack spacing={3}>
          <Stack>
            <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
              How to Play
            </Typography>
            <Typography gutterBottom variant="body1" sx={{ paddingBottom: theme.spacing(1) }}>
              A random color will be generated along with 4 neutral color buttons that contain a color code.
              Select which color code you think is the randomly generated color.
            </Typography>
            <Typography gutterBottom variant="body1" sx={{ paddingBottom: theme.spacing(1) }}>
              You can switch between Hexadecimal or RGB color modes.
            </Typography>
            <Typography gutterBottom variant="body1" sx={{ paddingBottom: theme.spacing(1) }}>
              Buttons will show their true colors after the correct answer has been selected. Have fun!
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
              Hexadecimal Colors
            </Typography>
            <Typography gutterBottom variant="body1" sx={{ paddingBottom: theme.spacing(1) }}>
              A hex color code is a 6-symbol code made of up to three 2-symbol elements. Each of the 2-symbol
              elements uses digits 0-9 and A-F to represent a red, green and blue color value. Take a look at
              this color:
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
            <Typography gutterBottom variant="body1" sx={{ paddingBottom: theme.spacing(1) }}>
              A RGB color combines hues of red, green and blue to create different colors. Each RGB value is
              between 0 and 255 where 0 is no color and 255 is full saturation. Take a look at this color:
            </Typography>
            {/* rgb(192, 117, 213) */}
            <Stack>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ paddingBottom: theme.spacing(1) }}>
                <Box sx={{ height: "50px", width: "50px", backgroundColor: "rgb(192, 117, 213)" }} />
                <Typography gutterBottom variant="body1">
                  rgb(192, 117, 213)
                </Typography>
              </Stack>
              <Typography gutterBottom variant="body1" sx={{ display: "flex" }}>
                The Red element here is 192
              </Typography>
              <Typography gutterBottom variant="body1" sx={{ display: "flex" }}>
                The Green element here is 117
              </Typography>
              <Typography gutterBottom variant="body1" sx={{ display: "flex" }}>
                The Blue element here is 213
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
