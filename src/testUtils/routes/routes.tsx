import React from 'react';
import { RouteConfig } from '../../types';

/**
 * Creates test routes.
 * @param homepageRouteProps The Home page routes config, use this to override it's default config.
 */
const createRoutes = (homepageRouteProps?: Partial<RouteConfig>) => [
  {
    key: "route-base-view",
    secure: false,
    path: "/",
    exact: true,
    component: () => <div>Home</div>,
    a11yMessage: "You have navigated to the Home Page",
    title: "Home",
    ...(homepageRouteProps || {})
  },
  {
    key: "route-login-view",
    secure: false,
    path: "/login",
    exact: true,
    component: () => <div>Login</div>,
    a11yMessage: "You have navigated to the Login Page",
    title: "Login",
  },
];

export default createRoutes;