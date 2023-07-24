import { Fragment, type FC } from 'react';
import { Formik, Form, Field } from 'formik';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import { string, object } from 'yup';

import { IAuthState, IModalState } from '../../vite-env';
import { AlertMessage } from '../../components/AlertMessage';
import { signUpRequested, signInRequested } from '../../redux/actions/auth';
import { SEVERITY_ERROR } from '../../pages/MainPage/constants';
import { 
  IFormValues, 
  INIT_VALUES,
  SIGN_UP_TYPE,
  SIGN_IN_FIELDS, 
  SIGN_UP_FIELDS, 
} from './constants';

import './AuthForm.css'

export const AuthForm: FC = () => {
  const dispatch = useDispatch();

  const { error, authErrors }: IAuthState = useSelector((store: RootState) => store.auth);
  const { modalType }: IModalState = useSelector((store: RootState) => store.modal);


  const usernameValidation = string()
    .min(4, 'Username must be of minimum 4 characters length')
    .required('Username is required');
  const emailValidation = string()
    .email('Invalid email')
    .required('Email is required');
  const passwordValidation = string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required');

  const SignInSchema = object().shape({
    email: emailValidation,
    password: passwordValidation
  });

  const SignUpSchema = object().shape({
    email: emailValidation,
    password: passwordValidation,
    username: usernameValidation
  });

  const isSignUp = modalType === SIGN_UP_TYPE;
  const currentFields = isSignUp ? SIGN_UP_FIELDS : SIGN_IN_FIELDS;
  const validationSchema = isSignUp ? SignUpSchema : SignInSchema;

  return (
    <>
      <Typography variant='h5' className='form-title'>{ modalType }</Typography>    
      <Typography variant='body2' className='form-error'>{ error }</Typography> 
      <Formik
        initialValues={INIT_VALUES}
        validationSchema={validationSchema}
        onSubmit={(
          values: IFormValues,
        ) => {
          isSignUp ?  
            dispatch(signUpRequested(values)):
            dispatch(signInRequested(values));
        }}
      >
        {({errors, touched}) =>(
          <Form className='form'>
            {currentFields.map(({ name, type, placeholder}) => (
              <Fragment key={name}>
                <Field 
                  name={name} 
                  type={type} 
                  variant='standard' 
                  placeholder={placeholder} 
                  className='form-field'
                />
                {touched[name as keyof object] && errors[name as keyof object] &&
                  <AlertMessage severity={SEVERITY_ERROR} message={errors[name as keyof object] as string}/>
                }
                {authErrors && authErrors[name as keyof object] &&
                  <AlertMessage severity={SEVERITY_ERROR} message={authErrors[name as keyof object]}/>
                }
              </Fragment>
            ))}
            
            <button type='submit'>{modalType}</button>
           
          </Form>
        )}
      </Formik>
    </>
  );
};