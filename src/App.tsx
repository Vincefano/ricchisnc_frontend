import { Avatar, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  AppProvider,
  DashboardLayout,
  Navigation,
  PageContainer,
  Router,
} from "@toolpad/core";
import { toolpadTheme } from "./config/ToolpadTheme";
import { useLayoutEffect, useState } from "react";
import { useWrapperNavigation, useWrapperRouter } from "./hooks";
import { PAGES } from "./constants/pages";
import { ContentPage } from "./components/ContentPage";
import { I18nextProvider } from "react-i18next";
import i18n from "./translations/i18n.ts";

const App = () => {
  const navigate = useNavigate();
  const [pathName, setPathName] = useState(PAGES.dashboardPage);

  useLayoutEffect(() => {
    navigate(pathName);
  }, [navigate, pathName]);

  /** Handler for both Routes and Sidebar handling */
  const handleRouter = useWrapperRouter({ pathName, setPathName });

  return (
    <I18nextProvider i18n={i18n}>
      <AppProvider
        theme={toolpadTheme}
        navigation={useWrapperNavigation() as Navigation}
        router={handleRouter as Router}
        branding={{
          logo: (
            <Avatar
              sx={{
                width: 180,
              }}
              variant="square"
              alt="RICCHI S.N.C."
              src="/logo.png"
            />
          ),
          title: "",
        }}
      >
        <Box className="App">
          <DashboardLayout>
            <PageContainer>
              <ContentPage />
            </PageContainer>
          </DashboardLayout>
        </Box>
      </AppProvider>
    </I18nextProvider>
  );
};

export default App;
