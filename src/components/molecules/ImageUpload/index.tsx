import { ChangeEvent, FC, useState, MouseEvent, useRef } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { FormErrorMessage } from '../../atoms';

interface ImageUploadProps {
  setFieldValue: (field: string, value: File | null, shouldValidate?: boolean) => void;
  resetField: () => void;
}

export const ImageUpload: FC<ImageUploadProps> = ({ setFieldValue, resetField }) => {
  const [fileName, setFileName] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      setFieldValue('image', file);
      setFileName(file.name);
    }
  };

  const handleReset = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setFieldValue('image', null);
    setFileName('');
    resetField();
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };
  return (
    <>
      <input
        ref={inputRef}
        id="image"
        name="image"
        type="file"
        onChange={handleChange}
        style={{ display: 'none' }}
      />
      <label htmlFor="image">
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
            mt: 2,
            maxWidth: 'fit-content',
            alignItems: 'center',
          }}
        >
          <Button component="span" variant="outlined" color="primary">
            {fileName ? 'Change Image' : 'Choose Image'}
          </Button>
          {fileName && (
            <Typography variant="body2" color="text.secondary">
              {fileName}
            </Typography>
          )}
          {fileName && (
            <Button variant="outlined" color="error" onClick={handleReset}>
              Clear Image
            </Button>
          )}
        </Stack>
      </label>
      <FormErrorMessage name="image" />
    </>
  );
};
