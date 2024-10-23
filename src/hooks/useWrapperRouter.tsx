import { useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/wrapperPage";
import { useEffect } from "react";
import { PAGES } from "../constants/pages";

type AppRouter = {
  pathName: string;
  setPathName: (a: string) => void;
};

export const useWrapperRouter = ({ pathName, setPathName }: AppRouter) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(pathName));
  }, [dispatch, pathName]);

  const handleNavigationWithFallback = (path: string) => {
    if (path === "/") {
      return PAGES.dashboardPage;
    } else {
      return path;
    }
  };

  return {
    pathname: pathName,
    searchParams: new URLSearchParams(),
    navigate: (path: string) => setPathName(handleNavigationWithFallback(path)),
  };
};
