import { styled } from '@mui/system';
import { ErrorMessage } from 'formik';
import { FC } from 'react';

interface FormErrorMessageProps {
  name: string;
}

const StyledErrorMessage = styled(ErrorMessage)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: '0.8rem',
}));

export const FormErrorMessage: FC<FormErrorMessageProps> = ({ name }) => (
  <StyledErrorMessage name={name} component="div" data-testid="error-message" />
);
