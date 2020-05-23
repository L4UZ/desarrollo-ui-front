import React from 'react';
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
import Alert from '@material-ui/lab/Alert';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useMutation } from '@apollo/react-hooks';
import { Link, useHistory } from 'react-router-dom';
import { pick } from 'lodash';

import { useAuth } from '../../AuthProvider';
import { signUpSchema } from '../../constants/validations';
import { SIGN_UP_MUTATION } from '../../api/mutations';
import { ADD_REVIEW_LOCATION } from '../../constants/localStorageKeys';
import useStyles from './styles';

const initialValues = {
  email: '',
  password: '',
  passwordConfirmation: '',
  firstName: '',
  lastName: '',
};

const SignUp = () => {
  const classes = useStyles();
  const { push: pushToHistory } = useHistory();
  const { setToken } = useAuth();

  const previousLocation = localStorage.getItem(ADD_REVIEW_LOCATION) || null;

  const [signUp, { loading, error }] = useMutation(SIGN_UP_MUTATION, {
    onCompleted: ({ signIn: token }) => {
      setToken(token);

      if (previousLocation) localStorage.removeItem(ADD_REVIEW_LOCATION);

      pushToHistory(previousLocation || '/');
    },
    onError: () => {},
  });

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={signUpSchema}
          onSubmit={(values, { resetForm }) => {
            signUp({
              variables: { user: pick(values, ['firstName', 'lastName', 'email', 'password']) },
            });
            resetForm();
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit} className={classes.form}>
              <Grid container>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    margin="normal"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    error={errors.firstName && touched.firstName}
                    helperText={touched.firstName && errors.firstName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    error={errors.lastName && touched.lastName}
                    helperText={touched.lastName && errors.lastName}
                  />
                </Grid>
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    error={errors.password && touched.password}
                    helperText={touched.password && errors.password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="passwordConfirmation"
                    label="Confirm your password"
                    type="password"
                    id="passwordConfirmation"
                    autoComplete="current-passwordConfirmation"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.passwordConfirmation}
                    error={errors.passwordConfirmation && touched.passwordConfirmation}
                    helperText={touched.passwordConfirmation && errors.passwordConfirmation}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={isSubmitting}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link to="/signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
        {loading && <CircularProgress />}
        {error && (
          <Alert severity="error" className={classes.errorMessage}>
            Account already exists
          </Alert>
        )}
      </div>
    </Container>
  );
};

export default SignUp;
