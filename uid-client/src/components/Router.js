import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import routes from '../constants/routes';

const Router = () => (
  <BrowserRouter>
    <Switch>
      {Object.entries(routes).map(([key, { path, component, ...props }]) => (
        <Route key={key} path={path} {...props}>
          {component}
        </Route>
      ))}
    </Switch>
  </BrowserRouter>
);

export default Router;
