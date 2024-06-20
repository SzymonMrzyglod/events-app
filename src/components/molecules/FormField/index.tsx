import { Field } from 'formik';
import { TextField, MenuItem } from '@mui/material';
import { FC, HTMLInputTypeAttribute } from 'react';
import { FormErrorMessage } from '../../atoms';

interface FormFieldProps {
  name: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  select?: boolean;
  options?: string[];
  multiline?: boolean;
  rows?: number;
}

export const FormField: FC<FormFieldProps> = ({
  name,
  type = 'text',
  label = '',
  select = false,
  options = [],
  multiline = false,
  rows = 1,
}) => (
  <>
    <Field
      name={name}
      type={type}
      as={TextField}
      select={select}
      label={label}
      fullWidth
      margin="normal"
      multiline={multiline}
      rows={rows}
    >
      {select &&
        options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
    </Field>
    <FormErrorMessage name={name} />
  </>
);
