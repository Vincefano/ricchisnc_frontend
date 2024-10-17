import { useEffect } from "react";
import { PAGES } from "../../constants/pages";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    navigate(PAGES.loginPage);
    window.location.reload();
  }, [navigate]);

  return null;
};
