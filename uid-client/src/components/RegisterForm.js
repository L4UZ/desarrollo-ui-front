import React from 'react';
import { Formik } from 'formik';
import { object, string } from 'yup';
import styled from 'styled-components';

const validationSchema = object().shape({
  email: string().email().required(),
  password: string().required().min(4).max(16),
  passwordConfirmation: string().required().min(4).max(16),
  name: string().required(),
});

const Input = styled.input`
  display: block;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 15rem;
`;

const RegisterForm = () => {
  const initialValues = { email: '', password: '', passwordConfirmation: '', name: '' };

  const handleSubmit = (evt) => {
    setTimeout(() => {
      console.log(evt);
    }, 1000);
  };

  return (
    <>
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <Input
              type="password"
              name="passwordConfirmation"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.passwordConfirmation}
            />
            {errors.passwordConfirmation &&
              touched.passwordConfirmation &&
              errors.passwordConfirmation}
            <Input
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
