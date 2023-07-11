import { string, object } from 'yup';

export interface Values {
  username: string;
  password: string;
  email: string;
}

const emailField = {
  "type": "email",
  "name": "email", 
  "placeholder": "email"
};

const passwordField = {
  "type": "password",
  "name": "password", 
  "placeholder": "password"
}

const usernameField = {
  "type": "text",
  "name": "username", 
  "placeholder": "username"
}

const usernameValidation = string()
  .min(4, 'Username must be of minimum 4 characters length')
  .required('Username is required');
const emailValidation = string()
  .email('Invalid email')
  .required('Required');
const passwordValidation = string()
  .min(8, 'Password should be of minimum 8 characters length')
  .required('Password is required');

export const SignUpSchema = object().shape({
  username: usernameValidation,
  email: emailValidation,
  password: passwordValidation
});

export const SignInSchema = object().shape({
  email: emailValidation,
  password: passwordValidation
});

export const SignInFields = [
  emailField,
  passwordField
]

export const SignUpFields = [
  emailField,
  usernameField,
  passwordField
]
