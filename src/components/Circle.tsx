import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";

export const Circle = ({ icon, name }: { icon: ReactNode; name: string }) => {
  console.log({ icon });
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={1}
      sx={{
        border: "1px solid red",
        width: 150,
        height: 150,
        borderRadius: "100px",
      }}
    >
      {icon}
      <Typography>{name}</Typography>
    </Box>
  );
};
