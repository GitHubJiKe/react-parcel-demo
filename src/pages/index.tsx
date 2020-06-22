import React from "react";
import { BrowserRouter as Router, Route, RouteProps } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";

const routes: Array<RouteProps> = [
  { path: "/", component: Page1, exact: true },
  { path: "/page2", component: Page2 },
];

const Pages: React.FC = () => {
  return (
      <Router>
        {routes.map((r) => (
          // @ts-ignore
          <Route key={r.path} {...r} />
        ))}
      </Router>
  );
};

export default Pages;
