import React, { useEffect } from 'react';
import { Formik } from 'formik';
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  CircularProgress,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';

import useStyles from './styles';
import { signInSchema } from '../../constants/validations';
import { SIGN_IN_MUTATION } from '../../api/mutations';

const SignIn = () => {
  const classes = useStyles();
  const [signIn, { data, loading, error }] = useMutation(SIGN_IN_MUTATION);

  useEffect(() => {
    if (data) localStorage.setItem('token', data.signUp);
  });

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
          onSubmit={(values, { resetForm }) => {
            signIn({ variables: { credentials: values } });
            resetForm();
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit} className={classes.form}>
              <Grid container>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
              </Grid>
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
                  <Link to="/signup" variant="body2">
                    Don&apos;t have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
        {loading && <CircularProgress />}
        {error && <Alert severity="error">Wrong email or password</Alert>}
      </div>
    </Container>
  );
};

export default SignIn;
