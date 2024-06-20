import * as Yup from 'yup';

const phoneRegExp = /^\+?[1-9]\d{1,14}$/;

export const phoneValidation = Yup.string()
  .matches(phoneRegExp, 'Invalid phone number')
  .required('Phone number is required');

export const imageValidation = Yup.mixed()
  .test('fileSize', 'File is too large', (value) => {
    if (!value) return true;
    return value instanceof File && value.size <= 5242880;
  })
  .test('fileFormat', 'Unsupported file format', (value) => {
    if (!value) return true;
    return value instanceof File && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type);
  })
  .required('Image is required');
