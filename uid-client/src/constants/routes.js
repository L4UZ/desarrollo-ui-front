import React from 'react';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';

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
  singin: {
    path: '/singin',
    component: <SignIn />,
  },
};

export default routes;
