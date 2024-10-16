import { useTranslation } from "react-i18next";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Computer, Logout, Store } from "@mui/icons-material";

/** Hook to handle sidebar labels and structure using Toolpad */
export const useWrapperNavigation = () => {
  const { t } = useTranslation();

  return [
    {
      kind: "header",
      title: t("sidebar.sections.applications.title"),
    },
    {
      segment: "dashboard",
      title: t("sidebar.sections.applications.elements.dashboard"),
      icon: <DashboardIcon />,
    },
    {
      segment: "store",
      title: t("sidebar.sections.applications.elements.store"),
      icon: <Store />,
    },
    {
      kind: "divider",
    },
    {
      kind: "header",
      title: t("sidebar.sections.applications.externalLink.title"),
    },
    {
      segment: "website",
      title: t("sidebar.sections.applications.externalLink.website"),
      icon: <Computer />,
    },
    {
      kind: "divider",
    },
    {
      kind: "header",
      title: t("sidebar.sections.account.title"),
    },
    {
      segment: "logout",
      title: t("sidebar.sections.account.elements.logout"),
      icon: <Logout />,
    },
  ];
};
