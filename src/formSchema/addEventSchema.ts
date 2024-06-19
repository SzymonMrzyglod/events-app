import * as Yup from 'yup';

const phoneRegExp = /^\+?[1-9]\d{1,14}$/;

export const addEventSchema = Yup.object({
  title: Yup.string().trim().required('Title is required'),
  date: Yup.date().required('Date is required'),
  description: Yup.string().trim().required('Description is required'),
  type: Yup.string().required('Type is required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Invalid phone number')
    .required('Phone number is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  location: Yup.string().trim().required('Location is required'),
  image: Yup.mixed()
    .test('fileSize', 'File is too large', (value) => {
      if (!value) return true;
      return value instanceof File && value.size <= 5242880;
    })
    .test('fileFormat', 'Unsupported file format', (value) => {
      if (!value) return true;
      return value instanceof File && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type);
    })
    .required('Image is required'),
});
