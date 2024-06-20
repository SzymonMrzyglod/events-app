import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormField } from '..';
import Wrapper from '../../../../tests/wrapper';
import { FormikWrapper } from '../../../../tests/formikWrapper';

describe('FormField', () => {
  test('renders text field correctly', () => {
    render(
      <Wrapper>
        <FormikWrapper>
          <FormField name="title" label="Title" />
        </FormikWrapper>
      </Wrapper>,
    );
    const inputElement = screen.getByLabelText('Title');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.getAttribute('type')).toBe('text');
  });

  test('renders multiline text field correctly', () => {
    render(
      <Wrapper>
        <FormikWrapper>
          <FormField name="description" label="Description" multiline rows={4} />
        </FormikWrapper>
      </Wrapper>,
    );
    const element = screen.getByLabelText('Description');
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('rows', '4');
  });
});
