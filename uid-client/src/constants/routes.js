import React from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const routes = {
  default: {
    path: '/',
    component: <LoginForm />,
    exact: true,
  },
  login: {
    path: '/login',
    component: <LoginForm />,
  },
  register: {
    path: '/register',
    component: <RegisterForm />,
  },
};

export default routes;
