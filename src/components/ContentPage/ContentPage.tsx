import { FC } from "react";
import { useSelector } from "react-redux";
import { PAGES } from "../../constants/pages";
import { DashboardPage } from "../../pages/Dashboard";
import { currentPageSelector } from "../../redux/wrapperPage";
import { Logout } from "../../pages";
import { EstimatePage } from "../../pages/Estimate";
import { FleetPage } from "../../pages/Fleet";

/** Content for the wrapper based on the current page, stored on Redux store*/
export const ContentPage: FC = () => {
  const { dashboardPage, website, storePage, logout, estimatePage, fleetPage } =
    PAGES;
  const currentPage = useSelector(currentPageSelector);

  const WRAPPER_CONTENT_MAPPING = {
    [estimatePage]: <EstimatePage />,
    [fleetPage]: <FleetPage />,
    [storePage]: <h1>STORE PAGE</h1>,
    [website]: <h1>WEBSITE PAGE</h1>,
    [logout]: <Logout />,
    [dashboardPage]: <DashboardPage />,
  };

  return WRAPPER_CONTENT_MAPPING[currentPage];
};
