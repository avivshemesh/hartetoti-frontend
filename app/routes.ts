import { type RouteConfig, index, prefix } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    ...prefix('login', [
        index('routes/Login/index.tsx')
    ])
] satisfies RouteConfig;
