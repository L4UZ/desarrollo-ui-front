import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import routes from '../constants/routes';

const Router = () => (
  <BrowserRouter>
    <Navbar />
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
