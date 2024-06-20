import * as Yup from 'yup';
import { imageValidation, phoneValidation } from './utils';

export const addEventSchema = Yup.object({
  title: Yup.string().trim().required('Title is required'),
  date: Yup.date().required('Date is required'),
  description: Yup.string().trim().required('Description is required'),
  type: Yup.string().required('Type is required'),
  phone: phoneValidation,
  email: Yup.string().email('Invalid email address').required('Email is required'),
  location: Yup.string().trim().required('Location is required'),
  image: imageValidation,
});
