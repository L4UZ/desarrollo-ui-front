import React from 'react';
import SignIn from '../components/SignIn';
import RegisterForm from '../components/RegisterForm';

const routes = {
  default: {
    path: '/',
    component: <SignIn />,
    exact: true,
  },
  login: {
    path: '/login',
    component: <SignIn />,
  },
  register: {
    path: '/register',
    component: <RegisterForm />,
  },
};

export default routes;
