import { Box } from "@mui/material";

export const ColorDisplay = ({ answer }: { answer: string | undefined }) => {
  return (
    <Box
      sx={{
        backgroundColor: answer,
        height: "300px",
        width: "100%",
        borderRadius: 3,
      }}
      mb={3}
    />
  );
};
