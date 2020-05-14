import React from 'react';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import RegionDetail from '../pages/RegionDetail';

const routes = {
  default: {
    path: '/',
    component: <Home />,
    exact: true,
  },
  signup: {
    path: '/signup',
    component: <SignUp />,
  },
  signin: {
    path: '/signin',
    component: <SignIn />,
  },
  regionDetail: {
    path: '/region-detail/:regionId',
    component: <RegionDetail />,
  },
};

export default routes;
