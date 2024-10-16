import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

/** Page for login */
export const LoginPage = () => {
  const { t } = useTranslation();

  const [credentials, setCredentials] = useState({
    email: { value: "", error: false },
    password: { value: "", error: false },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert();
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: { value, error: false },
    });
  };

  const isSubmitButtonDisabled =
    credentials.email.value === "" || credentials.password.value === "";

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box width={500} bgcolor="white" borderRadius={2}>
        <Box
          component="form"
          display="flex"
          flexDirection="column"
          gap={2}
          p={10}
          pt={5}
          onSubmit={onSubmit}
        >
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
            id="password"
            label={t("pages.login.password")}
            name="password"
            autoComplete="password"
            error={credentials.password.error}
            onChange={onInputChange}
            sx={{ mb: 2 }}
          />
          <Button
            disabled={isSubmitButtonDisabled}
            type="submit"
            size="large"
            variant="contained"
            color="primary"
          >
            {t("pages.login.submit")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
