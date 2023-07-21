import { Fragment, type FC, useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import Typography from '@mui/material/Typography';

import { stringOfUniques } from '../../helpers';
import { ICurrentUserState, IModalState } from '../../vite-env';
import { postCreate } from '../../redux/actions/posts';
import { RootState } from '../../redux/reducers/rootReducer';
import { AlertMessage } from '../AlertMessage';
import { 
  IFormValues,
  INIT_VALUES,
  FORM_VALIDATION,
  FORM_FIELDS,
} from './constants';

import './PostForm.css'

export const PostForm: FC = () => {
  const { error }: ICurrentUserState = useSelector((store: RootState) => store.user);
  const { modalType }: IModalState = useSelector((store: RootState) => store.modal);
  
  const dispatch = useDispatch();
  const imageRef = useRef<HTMLInputElement>(null);
  
  const submitForm = (formValues: IFormValues) => {
    formValues.tags = stringOfUniques(formValues.tags);
    const uploadedImage = imageRef.current?.files?.length
      ? imageRef.current?.files[0]
      : null;

    dispatch(postCreate({...formValues, image: uploadedImage}))
  }

  return (
    <>
      <Typography variant='h5' className='form-title'>{ modalType }</Typography>
      <Typography variant='body2' className='form-error'>{ error }</Typography>     
      <Formik
        initialValues={INIT_VALUES}
        validationSchema={FORM_VALIDATION}
        onSubmit={(formValues)=> submitForm(formValues)}
      >
        {({errors, touched}) =>(
          <Form className='form'>
            {FORM_FIELDS.map(({ 
              as,
              name,
              placeholder,
              rows
            }) => (
              <Fragment key={name}>
                <Field 
                  as={as}
                  name={name} 
                  placeholder={placeholder}
                  rows={rows}
                  className='form-field' 
                />
                {touched[name as keyof object] && errors[name as keyof object] &&
                  <AlertMessage 
                    severity='error' 
                    message={(errors as Record<string, string>)[name]}
                  />
                }
              </Fragment>
            ))}
            <input
              name='image' 
              type='file'
              accept='image/png, image/jpeg, .svg'
              ref={imageRef}
            />
            <button type='submit'>{modalType}</button>
          </Form>
        )}
      </Formik>
    </>
  );
};