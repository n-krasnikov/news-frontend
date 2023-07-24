export const SIGN_UP_TYPE: string = "Sign Up";

export interface IFormValues {
  username: string;
  password: string;
  email: string;
}

export const INIT_VALUES = {
  username: '',
  password: '',
  email: '',
};

const EMAIL_FIELD = {
  'type': 'email',
  'name': 'email', 
  'placeholder': 'email'
};

const PASSWORD_FIELD = {
  'type': 'password',
  'name': 'password', 
  'placeholder': 'password'
};

const USERNAME_FIELD = {
  'type': 'text',
  'name': 'username', 
  'placeholder': 'username'
};

export const SIGN_IN_FIELDS = [
  EMAIL_FIELD,
  PASSWORD_FIELD,
];

export const SIGN_UP_FIELDS = [
  ...SIGN_IN_FIELDS, 
  USERNAME_FIELD
];
