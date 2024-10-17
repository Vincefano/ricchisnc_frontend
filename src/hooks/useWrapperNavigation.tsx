import { useTranslation } from "react-i18next";
import {
  Book,
  CalendarMonth,
  Category,
  Computer,
  Logout,
  PostAdd,
  Warehouse,
} from "@mui/icons-material";

/** Hook to handle sidebar labels and structure using Toolpad */
export const useWrapperNavigation = () => {
  const { t } = useTranslation();

  return [
    {
      kind: "header",
      title: t("sidebar.sections.rental.title"),
    },
    {
      segment: "estimate",
      title: t("sidebar.sections.rental.elements.estimate"),
      icon: <PostAdd />,
    },
    {
      segment: "planner",
      title: t("sidebar.sections.rental.elements.planner"),
      icon: <Book />,
    },
    {
      segment: "dashboard",
      title: t("sidebar.sections.rental.elements.calendar"),
      icon: <CalendarMonth />,
    },
    {
      kind: "divider",
    },
    {
      kind: "header",
      title: t("sidebar.sections.warehouse.title"),
    },
    {
      segment: "items",
      title: t("sidebar.sections.warehouse.elements.items"),
      icon: <Category />,
    },
    {
      segment: "deposit",
      title: t("sidebar.sections.warehouse.elements.deposit"),
      icon: <Warehouse />,
    },
    {
      kind: "divider",
    },
    {
      kind: "header",
      title: t("sidebar.sections.externalLink.title"),
    },
    {
      segment: "website",
      title: t("sidebar.sections.externalLink.elements.website"),
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
      icon: <Logout sx={{ transform: "rotate(180deg)" }} />,
    },
  ];
};
