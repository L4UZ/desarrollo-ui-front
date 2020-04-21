import React from "react";
import { Formik } from "formik";
import { object, string } from "yup";
import styled from "styled-components";

const validationSchema = object().shape({
  email: string().email().max(255).required(),
  password: string().max(255).min(4).required(),
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

const H1 = styled.h1`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 15rem;
`;

const ButtonSubmit = styled.button`
  border-radius: 0px;
  padding: 5px 15px;
  background: none;
  border: 1px solid #607d8b;
  cursor: pointer;
`;

const Label = styled.label``;

const InputRow = styled.div`
  margin: 25px 0px;
`;

const DivMsgInvalid = styled.div`
  font-size: 10px;
  padding-top: 2px;
  color: #f44336;
`;

const DivMsgValid = styled.div`
  font-size: 10px;
  padding-top: 2px;
  color: #4caf50;
`;

const LoginForm = () => {
  return (
    <>
      <H1>Login</H1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 500);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <InputRow>
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <Error touched={touched.email} message={errors.email} />
            </InputRow>

            <InputRow>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <Error touched={touched.password} message={errors.password} />
            </InputRow>

            <InputRow>
              <ButtonSubmit type="submit" disabled={isSubmitting}>
                Submit
              </ButtonSubmit>
            </InputRow>
          </Form>
        )}
      </Formik>
    </>
  );
};

const Error = ({ touched, message }) => {
  if (!touched) {
    return <DivMsgInvalid>&nbsp;</DivMsgInvalid>;
  }
  if (message) {
    return <DivMsgInvalid>{message}</DivMsgInvalid>;
  }
  return <DivMsgValid>Ok</DivMsgValid>;
};

/*
.form-message {
  
}
.form-message.valid {
  color: #4caf50;
}
.form-message.invalid {
  font-size: 10px;
  padding-top: 2px;
  color: #f44336;
}

has-error {
  border: 1px solid #f44336;
}*/

export default LoginForm;
