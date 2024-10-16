import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFound";
import { LoginPage } from "./pages/Login";
import { DashboardPage } from "./pages/DashboardPage";

const App = () => {
  return (
    <>
      <Box className="App">
        <Routes>
          <Route path="home" element={<DashboardPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Box>
    </>
  );
};

export default App;
