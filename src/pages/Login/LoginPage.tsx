import React, { useRef, useState } from "react";
import { TextField, Box, Button, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Background from "../../assets/bg_signin.png";

export const LoginPage = () => {
  const { t } = useTranslation();

  const [credentials, setCredentials] = useState({
    email: { value: "", error: false },
    password: { value: "", error: false },
  });

  const FORM = useRef(null);
  const navigate = useNavigate();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("SUCA");
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: { value, error: false },
    });
  };

  const isSubmitDisabled =
    credentials.email.value === "" || credentials.password.value === "";

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "calc(100vh - 65px)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              borderRadius: "1% 0 0 1%",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: 600,
                height: 600,
                background: "white",
                p: 5,
              }}
            >
              <Box m={5} mb={9} textAlign="center">
                <Avatar
                  sx={{
                    width: "60%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  variant="square"
                  alt="RICCHI S.N.C."
                  src="/logo.png"
                />
              </Box>
              <Box
                component="form"
                ref={FORM}
                onSubmit={onSubmit}
                height="100%"
                display="flex"
                justifyContent="center"
              >
                <Box>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label={t("pages.login.email")}
                    name="email"
                    autoComplete="email"
                    autoFocus
                    error={credentials.email.error}
                    onChange={onInputChange}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    onChange={onInputChange}
                    label={t("pages.login.password")}
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />

                  <Box display="flex" justifyContent="center" width="100%">
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={isSubmitDisabled}
                      sx={{ mt: 3, mb: 2, maxWidth: 100, height: 50 }}
                    >
                      {t("pages.login.submit")}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: 400,
              height: 600,
              backgroundImage: `url(${Background})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              p: 5,
              borderRadius: "0 1% 1% 0",
              overflow: "hidden",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
