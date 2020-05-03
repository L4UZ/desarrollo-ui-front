import React from 'react';
import { Formik } from 'formik';
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import { signInSchema } from '../../constants/validations';
import routes from '../../constants/routes';

const Login = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const SignIn = () => {
  const classes = useStyles();
  const [login, { data }] = useMutation(Login);

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={signInSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            login({ variables: { email: values.email, password: values.password } });
            resetForm();
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors.email && touched.email}
                helperText={touched.email && errors.email}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={errors.password && touched.password}
                helperText={touched.password && errors.password}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link to={routes.signup.path} variant="body2">
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default SignIn;
