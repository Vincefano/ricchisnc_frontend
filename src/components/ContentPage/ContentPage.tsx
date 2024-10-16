import { FC } from "react";
import { useSelector } from "react-redux";
import { PAGES } from "../../constants/pages";
import { DashboardPage } from "../../pages/DashboardPage";
import { currentPageSelector } from "../../redux/wrapperPage";

/** Content for the wrapper based on the current page, stored on Redux store*/
export const ContentPage: FC = () => {
  const { dashboardPage, website, storePage, loginPage } = PAGES;
  const currentPage = useSelector(currentPageSelector);

  const WRAPPER_CONTENT_MAPPING = {
    [storePage]: <h1>STORE PAGE</h1>,
    [website]: <h1>WEBSITE PAGE</h1>,
    [loginPage]: <h1>LOGIN PAGE</h1>,
    [dashboardPage]: <DashboardPage />,
  };

  return WRAPPER_CONTENT_MAPPING[currentPage];
};
