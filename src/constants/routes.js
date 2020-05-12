import React from 'react';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import RegionDetail from '../pages/RegionDetail';

const routes = {
  default: {
    path: '/',
    component: <SignUp />,
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
