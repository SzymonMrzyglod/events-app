import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Formik, Form, Field } from 'formik';
import { FormErrorMessage } from '..';
import Wrapper from '../../../../tests/wrapper';

describe('FormErrorMessage', () => {
  test('renders without crashing', async () => {
    render(
      <Wrapper>
        <Formik
          initialValues={{ email: '' }}
          initialErrors={{ email: 'Invalid email address' }}
          initialTouched={{ email: true }}
          onSubmit={() => {}}
        >
          <Form>
            <Field name="email" />
            <FormErrorMessage name="email" />
          </Form>
        </Formik>
      </Wrapper>,
    );
    const errorComponent = await screen.findByTestId('error-message');

    expect(errorComponent).toBeInTheDocument();
  });
});
