import { useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/wrapperPage";
import { useEffect } from "react";

type AppRouter = {
  pathName: string;
  setPathName: (a: string) => void;
};

export const useWrapperRouter = ({ pathName, setPathName }: AppRouter) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(pathName));
  }, [dispatch, pathName]);

  return {
    pathname: pathName,
    searchParams: new URLSearchParams(),
    navigate: (path: string) => setPathName(path),
  };
};
