import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export enum NeutralColors {
  Main = "#64748b",
  ContrastText = "#fff",
}

const theme = createTheme({
  palette: {
    neutral: {
      main: NeutralColors.Main,
      contrastText: NeutralColors.ContrastText,
    },
  },
  typography: {
    h1: {
      fontFamily: "Poppins",
    },
    h2: {
      fontFamily: "Poppins",
    },
    h3: {
      fontFamily: "Poppins",
    },
    h4: {
      fontFamily: "Poppins",
    },
    h5: {
      fontFamily: "Poppins",
    },
    h6: {
      fontFamily: "Poppins",
    },
    body1: {
      fontFamily: "Poppins",
    },
    body2: {
      fontFamily: "Poppins",
    },
    subtitle1: {
      fontFamily: "Poppins",
    },
    subtitle2: {
      fontFamily: "Poppins",
    },
    caption: {
      fontFamily: "Poppins",
    },
    button: {
      fontFamily: "Poppins",
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: "Poppins",
        },
      },
    },
  },
});
export const themeWithResponsiveFontSizes = responsiveFontSizes(theme);
declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    neutral: true;
  }
}
