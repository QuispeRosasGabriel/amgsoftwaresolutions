import { Box, Button } from "@mui/material";
import React from "react";

interface ActionButtonsProps {
  onClean: () => void;
  onSave: () => void;
  disabledSave?: boolean;
  disabledCancel?: boolean;
  mainActionText?: string;
}

export const ActionButtons = ({
  onClean,
  onSave,
  disabledSave,
  disabledCancel,
  mainActionText = "Guardar",
}: ActionButtonsProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      px="32px"
      gap={1}
    >
      <Button
        sx={{
          color: "#fff",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)",
          },
          "&:focus": {
            transform: "scale(1.1)",
          },
          "&:active": {
            transform: "scale(0.95)",
          },
        }}
        onClick={() => onClean()}
        disabled={disabledCancel}
      >
        Limpiar
      </Button>
      <Button
        variant="contained"
        sx={{
          border: "1px solid #FF472F",
          background: "#FF472F",
          color: "#fff",
          transition: "transform 0.3s ease",
          "&:hover": {
            backgroundColor: "#FF472F",
            transform: "scale(1.1)",
          },
          "&:disabled": {
            backgroundColor: "#FF472F",
            color: "#fff",
          },
          "&:focus": {
            borderColor: "#FF472F",
            transform: "scale(1.1)",
          },
          "&:active": {
            transform: "scale(0.95)",
          },
        }}
        onClick={() => onSave()}
        disabled={disabledSave}
      >
        {mainActionText}
      </Button>
    </Box>
  );
};
