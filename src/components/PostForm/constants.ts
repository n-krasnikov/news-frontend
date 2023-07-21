import { string, object } from 'yup';

export interface IFormValues {
  title: string;
  text: string;
  tags: string;
}

const titleField = {
  'as': 'input',
  'name': 'title',
  'placeholder': 'title',
  'rows': '0'
};

const textField = {
  'as': 'textarea',
  'name': 'text',
  'placeholder': 'text',
  'rows': '5'
};

const tagsField = {
  'as': 'input',
  'name': 'tags',
  'placeholder': 'tag 1, tag 2, tag 3, ...',
  'rows': '0'
};

const titleValidation = string()
  .min(4, 'Title must be of minimum 4 characters length')
  .required('Title is required');
const textValidation = string()
  .min(12, 'Text must be of minimum 12 characters length')
  .required('Text is required');
const tagsValidation = string()
  .required('Tags is required');

export const FORM_VALIDATION = object().shape({
  title: titleValidation,
  text: textValidation,
  tags: tagsValidation
});

export const INIT_VALUES = {
  title: '',
  text: '',
  tags: ''
};

export const FORM_FIELDS = [titleField, textField, tagsField];