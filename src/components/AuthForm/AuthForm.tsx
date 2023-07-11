import { Fragment, type FC } from 'react';
import { Formik, Form, Field } from 'formik';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';

import { IAuth } from './AuthForm.props';
import { AlertMessage } from '../../components/AlertMessage';
import { signUpRequested, signInRequested } from '../../redux/actions/auth';
import { SEVERITY_ERROR } from '../../pages/MainPage/constants';
import { Values, SignUpSchema, SignInSchema, SignInFields, SignUpFields } from './constants';
import { SIGN_UP } from '../../locales.json';

import './AuthForm.css'
import { RootState } from '../../redux/reducers/rootReducer';
import { IAuthState } from '../../vite-env';

export const AuthForm: FC<IAuth> = ({modalType}) => {
  const dispatch = useDispatch();

  const { error, authErrors }: IAuthState = useSelector((store: RootState) => store.auth);

  const isSignUp = modalType === SIGN_UP;
  const currentFields = isSignUp ? SignUpFields : SignInFields;
  const validationSchema = isSignUp ? SignUpSchema : SignInSchema;


  return (
    <div>
      <Typography variant='h5' className='form-title'>{ modalType }</Typography>    
      <Typography variant='body2' className='form-error'>{ error }</Typography> 
      <Formik
        initialValues={{
          username: '',
          password: '',
          email: '',
        }}

        validationSchema={validationSchema}
        onSubmit={(
          values: Values,
          // { setSubmitting }: FormikHelpers<Values>
        ) => {
          isSignUp ?  
            dispatch(signUpRequested(values)):
            dispatch(signInRequested(values));
        }}
      >
        {({errors, touched}) =>(
          <Form className='form'>
            {currentFields.map((field) => (
              <Fragment key={field.name}>
              <Field 
                name={field.name} 
                type={field.type} 
                variant="standard" 
                placeholder={field.placeholder} 
                className="form-field"
              />
                {touched[field.name as keyof object] && errors[field.name as keyof object] &&
                  <AlertMessage severity={SEVERITY_ERROR} message={errors[field.name as keyof object] as string}/>
                }
                {authErrors && authErrors[field.name as keyof object] &&
                  <AlertMessage severity={SEVERITY_ERROR} message={authErrors[field.name as keyof object]}/>
                }
              </Fragment>
            ))}
            
            <button type="submit">Submit</button>
           
          </Form>
        )}
      </Formik>
    </div>
  );
};