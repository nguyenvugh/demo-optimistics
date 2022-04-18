import { BreadcrumbsType } from "../interfaces/breadcrumb.interface";
import { ROUTE_HOME } from "./routes.constants";

// ---------------------- HOME
export const BREAD_CRUMB_NEWS_DETAIL: BreadcrumbsType[] = [
  {
    label: "Danh sách tin tức",
    link: ROUTE_HOME,
  },
  {
    label: "Chi tiết tin tức",
    link: "",
  },
];
