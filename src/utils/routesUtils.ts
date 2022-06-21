import { RouteConfig } from "react-router-config";

/**
 * This route type for configure routes for each page.
 * ```javascript
 *  const HomeRoute: Route =  {
 * -    path: "/",
 * -    exact: true,
 * -    component: () => <Home />,
 * - };
 *
 * ```
 */
export type Route = {
  auth?: string;
} & RouteConfig;

export type Config = {
  auth?: string;
  routes?: Route[];
};

/**
 *
 * @param config Route configuration for each app.
 * ```typescript
 *
 * const TodoAppConfig: Config = {
 * -  routes: [
 * -    {
 * -      path: ["/apps/todo/:folderHandle/:todoId?"],
 * -      auth: "admin",
 * -      component: React.lazy(() => import("./TodoApp")),
 * -    },
 * -    {
 * -      path: "/apps/todo",
 * -      component: () => <Redirect to="/apps/todo/all" />,
 * -    },
 * -  ],
 * };
 * ```
 * @param defaultAuth This part will use for all routes which those have n't any auth.
 * @returns {Config}
 */
export const setRoutes = (config: Config, defaultAuth: string = "admin") => {
  let routes: Route[] = [...config.routes];

  routes = routes.map((route) => {
    let auth = null;

    //    (config.auth || config.auth === null) ? config.auth : auth;
    auth = config.auth || config.auth === null ? config.auth : defaultAuth;

    auth = route.auth || route.auth === null ? route.auth : auth;

    return {
      ...route,
      auth,
    };
  });

  return [...routes];
};

/**
 *
 * @param  {Config} configs - array of configs for each app
 * @param defaultAuth
 * @returns {Config}
 */
export const generateRoutesFromConfigs = (
  configs: Config[],
  defaultAuth?: string
) => {
  let allRoutes: Route[] = [];
  configs.forEach((config) => {
    allRoutes = [...allRoutes, ...setRoutes(config, defaultAuth)];
  });
  return allRoutes;
};
