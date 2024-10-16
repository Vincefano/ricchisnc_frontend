import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../constants/pages";
import { KeyboardArrowLeft } from "@mui/icons-material";

export const NotFoundPage = () => {
  /** Hooks */
  const { t } = useTranslation();
  const navigate = useNavigate();

  /** Handlers */
  const handleNavigate = () => {
    navigate(PAGES.dashboardPage);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <ErrorOutlineIcon sx={{ fontSize: 60, mb: 2 }} color="primary" />
      <Box
        display="flex"
        flexDirection="row"
        alignContent="center"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h4" width="100%" textAlign="center">
          {t("pages.notFound.title")}
        </Typography>
      </Box>

      <Typography variant="subtitle2" width="100%" textAlign="center" mb={5}>
        {t("pages.notFound.description")}
      </Typography>
      <Button variant="contained" onClick={handleNavigate}>
        <Typography variant="button" display="flex" alignItems="center">
          <KeyboardArrowLeft />
          {t("pages.notFound.backToHome")}
        </Typography>
      </Button>
    </Box>
  );
};
