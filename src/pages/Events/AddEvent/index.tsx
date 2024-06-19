import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button, TextField, MenuItem, Card, Typography, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { addEventSchema } from '../../../formSchema/addEventSchema';
import { ImageUpload } from '../../../components/molecules';
import { addEvent } from '../../../redux/slice/event';
import { AppDispatch } from '../../../redux/store';
import { FormErrorMessage } from '../../../components/atoms';
import { EventTypes } from '../../../types/event';
import routeRoutes from '../../../routes/routes';

export const AddEvent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const initialValues = {
    title: '',
    date: '',
    description: '',
    type: '',
    phone: '',
    email: '',
    location: '',
    image: null,
  };
  return (
    <>
      <Helmet>
        ‍<title>Add event</title>‍
        <meta name="description" content="Add new event" />
      </Helmet>
      <Formik
        initialValues={initialValues}
        validationSchema={addEventSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const formData = new FormData();
          formData.append('title', values.title);
          formData.append('date', values.date);
          formData.append('description', values.description);
          formData.append('type', values.type);
          formData.append('phone', values.phone);
          formData.append('email', values.email);
          formData.append('location', values.location);

          if (values.image) {
            formData.append('image', values.image);
          }

          dispatch(addEvent(formData))
            .then(() => {
              resetForm();
              navigate(routeRoutes.events);
            })
            .catch((error) => {
              console.error('Error adding event:', error);
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Card
            sx={{
              marginTop: 2,
              p: 2,
            }}
          >
            <Typography variant="h5">Add new event!</Typography>

            <Form encType="multipart/form-data">
              <Field
                name="title"
                type="text"
                as={TextField}
                label="Title"
                fullWidth
                margin="normal"
              />
              <FormErrorMessage name="title" />
              <Field name="date" type="datetime-local" as={TextField} fullWidth margin="normal" />
              <FormErrorMessage name="date" />
              <Field
                name="description"
                as={TextField}
                label="Description"
                fullWidth
                margin="normal"
                multiline
                rows={4}
              />
              <FormErrorMessage name="description" />
              <Field name="type" as={TextField} select label="Type" fullWidth margin="normal">
                {Object.values(EventTypes).map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Field>
              <FormErrorMessage name="type" />
              <Field
                name="phone"
                type="text"
                as={TextField}
                label="Phone"
                fullWidth
                margin="normal"
              />
              <FormErrorMessage name="phone" />
              <Field
                name="email"
                type="email"
                as={TextField}
                label="Email"
                fullWidth
                margin="normal"
              />
              <FormErrorMessage name="email" />
              <Field
                name="location"
                type="text"
                as={TextField}
                label="Location"
                fullWidth
                margin="normal"
              />
              <FormErrorMessage name="location" />
              <ImageUpload
                setFieldValue={setFieldValue}
                resetField={() => setFieldValue('image', null)}
              />
              <Stack
                sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: 2 }}
              >
                <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                  Save Event
                </Button>
                <Button type="reset" variant="contained" color="error">
                  Reset form
                </Button>
              </Stack>
            </Form>
          </Card>
        )}
      </Formik>
    </>
  );
};
