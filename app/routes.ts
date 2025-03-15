import { type RouteConfig, index, prefix } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix("login", [index("routes/Login/Login.tsx")]),
  ...prefix("register", [index("routes/Register/Register.tsx")]),
] satisfies RouteConfig;
