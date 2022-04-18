import { ROUTE_ADD_TODO } from "src/common/constants/routes.constants";
import { LeftMenuConfig } from "../interfaces/common.interface";

export const LEFT_MENU_CONFIG: LeftMenuConfig[] = [
  // Login page
  {
    label: "Todo list",
    authority: [],
    isParent: true,
    resources: "cbi",
    children: [
      {
        label: "Add Todo",
        pathName: ROUTE_ADD_TODO,
        authority: [],
        children: [],
      },
    ],
  },
];
