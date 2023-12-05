import { lazy } from "react";

// ** Document title
const TemplateTitle = "%s - Expo";

// ** Default Route
const DefaultRoute = "/dashboard";

// ** Merge Routes
const Routes = [
  {
    path: "/dashboard",
    component: lazy(() => import("../../views/Dashboard")),
  },
  {
    path: "/fuel-transaction-history",
    component: lazy(() => import("../../views/FuelTransaction")),
  },
  {
    path: "/login",
    component: lazy(() => import("../../views/Login")),
    layout: "BlankLayout",
    meta: {
      authRoute: true,
    },
  },
  {
    path: "/error",
    component: lazy(() => import("../../views/Error")),
    layout: "BlankLayout",
  },
];

export { DefaultRoute, TemplateTitle, Routes };
