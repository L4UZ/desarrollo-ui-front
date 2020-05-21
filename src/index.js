import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { ApolloProvider } from '@apollo/react-hooks';

import * as serviceWorker from './serviceWorker';
import App from './App';

import apiClient from './api/apiClient';
import { theme } from './constants/theme';
import AuthProvider from './AuthProvider';

import 'typeface-roboto';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ApolloProvider client={apiClient}>
          <App />
        </ApolloProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
