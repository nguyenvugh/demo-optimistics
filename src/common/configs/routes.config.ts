import React from "react";
import { ROUTE_ADD_TODO, ROUTE_HOME, ROUTE_LOGIN } from "../constants/routes.constants";
import { RoutesConfig } from "../interfaces/common.interface";

const HomeLazy = React.lazy(() =>
  import("src/common/components/layouts/dasboard-layout").then(({ DashBoardLayout }) => ({
    default: DashBoardLayout,
  })),
);

const ProductsLazy = React.lazy(() =>
  import("src/components/products").then(({ Products }) => ({
    default: Products,
  })),
);
export const ROUTES_CONFIG: RoutesConfig[] = [
  // Login page
  {
    pathName: ROUTE_LOGIN,
    resource: "all",
    component: () => null,
    routes: [],
  },
  // Home page
  {
    pathName: ROUTE_HOME,
    resource: "all",
    component: HomeLazy,
    routes: [
      {
        index: true,
        resource: "all",
        component: ProductsLazy,
        routes: [],
      },
      {
        pathName: ROUTE_ADD_TODO,
        resource: "all",
        component: ProductsLazy,
        routes: [],
      },
    ],
  },
];
