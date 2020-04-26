import { object, string } from 'yup';

export const signInSchema = object().shape({
  email: string().email().required(),
  password: string().min(4).required(),
});
