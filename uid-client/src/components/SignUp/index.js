import React from 'react';
import { Formik } from 'formik';
import { Avatar, Button, TextField, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles';
import { signInSchema } from '../../constants/validations';

const initialValues = {
  email: '',
  password: '',
  passwordConfirmation: '',
  firstName: '',
  lastName: '',
};

const SignUp = () => {
  const classes = useStyles();

  const handleSubmit = evt => {
    setTimeout(() => {
      console.log(evt);
    }, 1000);
  };

  return (
    <Container component="main" maxWidth={'sm'}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={signInSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    error={errors.firstName && touched.firstName}
                    helperText={touched.firstName && errors.firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
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
              {/* <Grid container justify="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid> */}
            </form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default SignUp;
