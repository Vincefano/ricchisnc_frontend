import React, { useState, useCallback } from "react";
import {
  TextField,
  Box,
  Button,
  Avatar,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Login } from "@mui/icons-material";
import { login } from "../../utils/login/login";
import { useDispatch } from "react-redux";

export const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState<boolean>(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    usernameError: false,
  });

  /** Validation rules for username */
  const validateUsername = useCallback((username: string) => {
    return username.length === 0 || username.length > 2;
  }, []);

  /** Handle input change. It fills the state with the new value */
  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setCredentials((prev) => ({
        ...prev,
        [name]: value,
        usernameError: name === "username" ? false : prev.usernameError,
      }));
    },
    []
  );

  /** Submit handler */
  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { username, password } = credentials;

      setCredentials((prev) => ({
        ...prev,
        usernameError: !validateUsername(username),
      }));

      login(username, password, navigate, dispatch, setLoading);
    },
    [credentials, dispatch, navigate, validateUsername]
  );

  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 65px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 600,
          background: "white",
          padding: 7,
          borderRadius: 2,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Box
          mb={5}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
        >
          <Avatar
            sx={{ width: 270, height: "auto" }}
            imgProps={{ draggable: false }}
            variant="square"
            alt="RICCHI S.N.C."
            src="/logo.png"
          />
          <Typography variant="h6" gutterBottom>
            Resources Manager
          </Typography>
        </Box>
        <Box component="form" onSubmit={onSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label={t("pages.login.username")}
            name="username"
            autoComplete="username"
            autoFocus
            error={credentials.usernameError}
            helperText={
              credentials.usernameError && t("pages.login.usernameError")
            }
            onChange={onInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label={t("pages.login.password")}
            type="password"
            id="password"
            autoComplete="off"
            onChange={onInputChange}
          />
          <Box display="flex" justifyContent="flex-end" width="100%">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, maxWidth: 280, height: 50 }}
            >
              {t("pages.login.submit")}
              {isLoading ? (
                <CircularProgress sx={{ ml: 2, color: "white" }} size={20} />
              ) : (
                <Login sx={{ ml: 1 }} />
              )}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
