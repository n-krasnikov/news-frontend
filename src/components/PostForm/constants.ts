export interface IFormValues {
  title: string;
  text: string;
  tags: string;
}

interface IField {
  as: 'input' | 'textarea',
  name: string,
  placeholder: string,
  rows: string,
}

const TITLE_FIELD: IField = {
  'as': 'input',
  'name': 'title',
  'placeholder': 'title',
  'rows': '0'
};

const TEXT_FIELD: IField = {
  'as': 'textarea',
  'name': 'text',
  'placeholder': 'text',
  'rows': '5'
};

const TAGS_FIELD: IField = {
  'as': 'input',
  'name': 'tags',
  'placeholder': 'tag 1, tag 2, tag 3, ...',
  'rows': '0'
};

export const INIT_VALUES = {
  title: '',
  text: '',
  tags: ''
};

export const FORM_FIELDS = [TITLE_FIELD, TEXT_FIELD, TAGS_FIELD];
