import React from 'react';
import SignUp from '../components/SignUp';

const routes = {
  default: {
    path: '/',
    component: <SignUp />,
    exact: true,
  },
  // login: {
  //   path: '/login',
  //   component: <LoginForm />,
  // },
  signup: {
    path: '/signup',
    component: <SignUp />,
  },
};

export default routes;
