import { Fragment, type FC, useState, SetStateAction, ChangeEvent } from 'react';
import { Formik, Form, Field } from 'formik';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';

import { stringOfUniques } from '../../helpers';
import { ICurrentUserState } from '../../vite-env';
import { IPostForm } from './PostForm.props';
import { postCreate } from '../../redux/actions/posts';
import { RootState } from '../../redux/reducers/rootReducer';
import { AlertMessage } from '../AlertMessage';
import { SEVERITY_ERROR } from '../../pages/MainPage/constants';
import { 
  initialValues,
  validationSchema,
  Values,
  fields,
} from './constants';

import './PostForm.css'

export const EditForm: FC<IPostForm> = ({modalType}) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState<File | null>(null);

  const { error }: ICurrentUserState = useSelector((store: RootState) => store.user);

  const submitForm = (values: Values) => {
    values.tags = stringOfUniques(values.tags)
    dispatch(postCreate({...values, image}))
  }

  const onChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      setImage(e.target.files[0]);
    }
  }

  return (
    <>
      <Typography variant='h5' className='form-title'>{ modalType }</Typography>
      <Typography variant='body2' className='form-error'>{ error }</Typography>     
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values)=> submitForm(values)}
      >
        {({errors, touched}) =>(
          <Form className='form'>
            {fields.map(({ 
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
                  className="form-field" 
                />
                {touched[name as keyof object] && errors[name as keyof object] &&
                  <AlertMessage severity={SEVERITY_ERROR} message={errors[name as keyof object] as string}/>
                }
              </Fragment>
            ))}
            <input
              name="image" 
              type="file"
              accept="image/png, image/jpeg, .svg"
              onChange={onChangeImage} 
            />
            <button type="submit">{modalType}</button>
          </Form>
        )}
      </Formik>
    </>
  );
};