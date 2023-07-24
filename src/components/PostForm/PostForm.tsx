import { Fragment, type FC, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { string, object } from 'yup';

import Typography from '@mui/material/Typography';

import { stringOfUniques } from '../../helpers';
import { ICurrentUserState, IModalState } from '../../vite-env';
import { postCreate } from '../../redux/actions/posts';
import { RootState } from '../../redux/reducers/rootReducer';
import { 
  IFormValues,
  INIT_VALUES,
  FORM_FIELDS,
} from './constants';

import './PostForm.css'

const formValidation = object().shape({
  title: string()
    .min(4, 'Title must be of minimum 4 characters length')
    .required('Title is required'),
  text: string()
    .min(12, 'Text must be of minimum 12 characters length')
    .required('Text is required'),
  tags: string()
    .required('Tags is required'),
});

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
      <Typography variant='h5' className='form-title'>{modalType}</Typography>
      <Typography variant='body2' className='form-error'>{error as string}</Typography>     
      <Formik
        initialValues={INIT_VALUES}
        validationSchema={formValidation}
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
                  errors={errors}
                  touched={touched}
                />
                <ErrorMessage name={name}>{err => <div className='form-error'>{err}</div>}</ErrorMessage>
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