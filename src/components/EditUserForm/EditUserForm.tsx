import { Fragment, type FC, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { string } from 'yup';

import Typography from '@mui/material/Typography';

import { RootState } from '../../redux/reducers/rootReducer';

import './EditUserForm.css'
import { IAuthState, IModalState, IUser } from '../../vite-env';
import { userEditRequested } from '../../redux/actions/user';


export const EditUserForm: FC = () => {

  const { userData }: IAuthState = useSelector((store: RootState) => store.auth);
  const { modalType }: IModalState = useSelector((store: RootState) => store.modal);

  const INIT_VALUES = {
    username: userData?.username ?? ''
  }
  interface IFormValues {
    username: string,
  }
  const usernameValidation = string()
    .min(4, 'Username must be of minimum 4 characters length')
    .required('Username is required');

  const dispatch = useDispatch();
  const avatarRef = useRef<HTMLInputElement>(null);

  const submitForm = (formValues: IFormValues) => {
    const uploadedAvatar = avatarRef.current?.files?.length
    ? avatarRef.current?.files[0]
    : null;

    dispatch(userEditRequested({...formValues, avatar: uploadedAvatar}));
  }

  return (
    <>
      <Typography variant='h5' className='form-title'>{ modalType }</Typography>    
      <Formik
        initialValues={INIT_VALUES}
        validationSchema={usernameValidation}
        onSubmit={submitForm}
      >
        {({errors, touched}) =>(
          <Form className='form'>
            <Field
              name='username'
              type='text'
              variant='standard' 
              placeholder='username'
              className='form-field'
              errors={errors}
              touched={touched}
            />
            <ErrorMessage name='username'>{err => <div className='form-error'>{err}</div>}</ErrorMessage>
            <input
              name='avatar' 
              type='file'
              accept='image/png, image/jpeg, .svg'
              ref={avatarRef}
            />
            <button type='submit'>{modalType}</button>
          </Form>
        )}
      </Formik>
    </>
  );
};