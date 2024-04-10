import { Alert, Box, Button, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomInput } from "../components";
import { useIsAdmin } from "../hooks";
import logo from "../logo.png";
import { ADMIN_ROLES, USER_ROLES } from "../mocks";

export const Login = () => {
  const isSmDown = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  useIsAdmin(loginForm.email);
  const [isInvalidLogin, setIsInvalidLogin] = useState(false);

  const login = () => {
    const mixedValidUserList = [...USER_ROLES, ...ADMIN_ROLES];
    const validPasswords = ["Altagamma2024!", "AltagammaVenta!1"];

    const validEmail = mixedValidUserList.find((c) => c === loginForm.email);
    const isValidPassword = validPasswords.find(
      (v) => v === loginForm.password
    );

    if (validEmail && isValidPassword) {
      navigate("/actions");
    } else {
      setIsInvalidLogin(true);

      setTimeout(() => {
        setIsInvalidLogin(false);
      }, 1000);
    }
  };

  return (
    <>
      {isInvalidLogin && (
        <Alert
          severity="error"
          sx={{
            position: "fixed",
            top: "20px",
            left: "20px",
            opacity: 1,
            transform: "translateX(0)",
            animation: "fadeAndMoveIn 0.5s forwards",
            "@keyframes fadeAndMoveIn": {
              "0%": {
                opacity: 0,
                transform: "translateX(-100px)",
              },
              "100%": {
                opacity: 1,
                transform: "translateX(0)",
              },
            },
          }}
        >
          Credenciales Invalidas
        </Alert>
      )}
      <Box sx={{ height: "100vh", textAlign: "center" }}>
        <img
          style={{
            margin: "20px 0",
          }}
          src={logo}
          alt=""
          width={140}
        />
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          gap={2}
          maxWidth={isSmDown ? "80%" : "500px"}
          sx={{ margin: "0 auto" }}
        >
          <CustomInput
            label="Usuario"
            name="email"
            autoComplete="off"
            value={loginForm.email}
            onChange={(ev) =>
              setLoginForm({ ...loginForm, [ev.target.name]: ev.target.value })
            }
          />
          <CustomInput
            label="Contrasena"
            name="password"
            autoComplete="off"
            type="password"
            value={loginForm.password}
            onChange={(ev) =>
              setLoginForm({ ...loginForm, [ev.target.name]: ev.target.value })
            }
          />
        </Box>
        <Box marginTop={2}>
          <Button
            sx={{
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
            onClick={() => login()}
          >
            Iniciar Sesion
          </Button>
        </Box>
      </Box>
    </>
  );
};
