import { object, string } from 'yup';

export const signInSchema = object().shape({
  email: string().email().required(),
  password: string().required().min(4).max(16),
  passwordConfirmation: string().required().min(4).max(16),
  firstName: string().required(),
  lastName: string().required(),
});
