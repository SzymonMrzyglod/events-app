import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Formik } from 'formik';
import { ReactNode } from 'react';
import { ImageUpload } from '..';
import Wrapper from '../../../../tests/wrapper';

const FormikWrapper = ({ children }: { children: ReactNode }) => (
  <Formik initialValues={{ image: null }} onSubmit={() => {}}>
    {() => children}
  </Formik>
);

describe('ImageUpload', () => {
  const mockSetFieldValue = jest.fn();
  const mockResetField = jest.fn();

  const setup = () => {
    render(
      <Wrapper>
        <FormikWrapper>
          <ImageUpload setFieldValue={mockSetFieldValue} resetField={mockResetField} />
        </FormikWrapper>
      </Wrapper>,
    );
    const fileInput = screen.getByLabelText(/choose image/i) as HTMLInputElement;
    return { fileInput };
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render the upload button', () => {
    setup();
    expect(screen.getByText(/choose image/i)).toBeInTheDocument();
  });

  test('should display the file name when a file is selected', () => {
    const { fileInput } = setup();
    const file = new File(['dummy content'], 'example.png', { type: 'image/png' });

    fireEvent.change(fileInput, { target: { files: [file] } });

    expect(screen.getByText('example.png')).toBeInTheDocument();
    expect(screen.getByText(/change image/i)).toBeInTheDocument();
    expect(screen.getByText(/clear image/i)).toBeInTheDocument();
  });

  test('should call setFieldValue with the selected file', () => {
    const { fileInput } = setup();
    const file = new File(['dummy content'], 'example.png', { type: 'image/png' });

    fireEvent.change(fileInput, { target: { files: [file] } });

    expect(mockSetFieldValue).toHaveBeenCalledWith('image', file);
  });

  test('should clear the file and reset the field when the clear button is clicked', () => {
    const { fileInput } = setup();
    const file = new File(['dummy content'], 'example.png', { type: 'image/png' });

    fireEvent.change(fileInput, { target: { files: [file] } });

    const clearButton = screen.getByText(/clear image/i);
    fireEvent.click(clearButton);

    expect(mockSetFieldValue).toHaveBeenCalledWith('image', null);
    expect(mockResetField).toHaveBeenCalled();
    expect(screen.queryByText('example.png')).not.toBeInTheDocument();
    expect(screen.getByText(/choose image/i)).toBeInTheDocument();
    expect(fileInput.value).toBe('');
  });
});
