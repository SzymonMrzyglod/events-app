import { Formik } from 'formik';
import { ReactNode } from 'react';

export const FormikWrapper = ({ children }: { children: ReactNode }) => (
  <Formik initialValues={{ image: null }} onSubmit={() => {}}>
    {() => children}
  </Formik>
);
