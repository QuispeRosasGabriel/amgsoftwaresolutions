import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Build,
  Search,
  AppRegistration,
  AttachMoney,
} from "@mui/icons-material";
import logo from "../logo.png";
import { useIsAdmin } from "../hooks";

export const CommandCenter = () => {
  const navigate = useNavigate();
  const isAdmin = JSON.parse(localStorage.getItem("IS_ADMIN") ?? "false");

  const baseActions = [
    {
      name: "Registro",
      path: "/register-vehicle",
      icon: <AppRegistration />,
    },
    {
      name: "Busqueda",
      path: "/search-vehicle",
      icon: <Search />,
    },
  ];

  const adminActions = [
    {
      name: "Balance Financiero",
      path: "/finance-balance",
      icon: <AttachMoney />,
    },
    {
      name: "Ajustes",
      path: "/settings",
      icon: <Build />,
    },
  ];

  const actions = isAdmin ? [...baseActions, ...adminActions] : baseActions;

  return (
    <>
      <Box display="flex" justifyContent="center" my={4}>
        <img src={logo} alt="" width={200} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={3}
      >
        {actions.map((action) => (
          <Button
            key={action.path}
            sx={{
              width: "200px",
              border: "1px solid #FF472F",
              background: "#FF472F",
              color: "#fff",
              transition: "transform 0.3s ease",
              "&:hover": {
                backgroundColor: "#FF472F",
                transform: "scale(1.1)",
              },
              "&:focus": {
                borderColor: "#FF472F",
                transform: "scale(1.1)",
              },
              "&:active": {
                transform: "scale(0.95)",
              },
            }}
            variant="contained"
            onClick={() => navigate(action.path)}
          >
            {action.name}
          </Button>
        ))}
      </Box>
    </>
  );
};
