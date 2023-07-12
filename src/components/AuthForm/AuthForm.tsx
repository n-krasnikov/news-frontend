import { Fragment, type FC } from 'react';
import { Formik, Form, Field } from 'formik';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';

import { IAuthState } from '../../vite-env';
import { IAuth } from './AuthForm.props';
import { AlertMessage } from '../../components/AlertMessage';
import { signUpRequested, signInRequested } from '../../redux/actions/auth';
import { SEVERITY_ERROR } from '../../pages/MainPage/constants';
import { SIGN_UP } from '../../locales.json';
import { 
  Values, 
  initialValues,
  SignUpSchema, 
  SignInSchema, 
  SignInFields, 
  SignUpFields,
} from './constants';

import './AuthForm.css'

export const AuthForm: FC<IAuth> = ({modalType}) => {
  const dispatch = useDispatch();

  const { error, authErrors }: IAuthState = useSelector((store: RootState) => store.auth);

  const isSignUp = modalType === SIGN_UP;
  const currentFields = isSignUp ? SignUpFields : SignInFields;
  const validationSchema = isSignUp ? SignUpSchema : SignInSchema;

  return (
    <>
      <Typography variant='h5' className='form-title'>{ modalType }</Typography>    
      <Typography variant='body2' className='form-error'>{ error }</Typography> 
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(
          values: Values,
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
                  variant="standard" 
                  placeholder={placeholder} 
                  className="form-field"
                />
                {touched[name as keyof object] && errors[name as keyof object] &&
                  <AlertMessage severity={SEVERITY_ERROR} message={errors[name as keyof object] as string}/>
                }
                {authErrors && authErrors[name as keyof object] &&
                  <AlertMessage severity={SEVERITY_ERROR} message={authErrors[name as keyof object]}/>
                }
              </Fragment>
            ))}
            
            <button type="submit">{modalType}</button>
           
          </Form>
        )}
      </Formik>
    </>
  );
};