import React from 'react';
import { Formik, Form } from 'formik';
import { Button, Card, Typography, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FormikHelpers } from 'formik/dist/types';
import { toast } from 'react-toastify';
import { addEventSchema } from '../../../formSchema/addEventSchema';
import { FormField, ImageUpload } from '../../../components/molecules';
import { addEvent } from '../../../redux/slice/event';
import { AppDispatch } from '../../../redux/store';
import { EventItem, EventTypes } from '../../../types/event';
import routeRoutes from '../../../routes/routes';

interface AddEventFormProps extends Omit<EventItem, 'id'> {}

export const AddEvent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const initialValues: AddEventFormProps = {
    title: '',
    date: '',
    description: '',
    type: EventTypes.Culture,
    phone: '',
    email: '',
    location: '',
    image: '',
  };

  const handleSubmit = async (
    values: AddEventFormProps,
    { setSubmitting, resetForm }: FormikHelpers<AddEventFormProps>,
  ) => {
    try {
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        const value = values[key as keyof AddEventFormProps];
        if (key === 'image') {
          formData.append('image', value);
        } else {
          formData.append(key, value);
        }
      });

      await dispatch(addEvent(formData));
      resetForm();
      navigate(routeRoutes.events);
    } catch (error) {
      toast.error('Error adding event');
    } finally {
      setSubmitting(false);
    }
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
        onSubmit={handleSubmit}
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
              <FormField name="title" label="Title" />
              <FormField name="date" type="datetime-local" />
              <FormField name="description" label="Description" multiline rows={4} />
              <FormField
                name="type"
                type="select"
                label="Type"
                select
                options={Object.values(EventTypes)}
              />

              <FormField name="phone" type="text" label="Phone" />
              <FormField name="email" type="email" label="Email" />
              <FormField name="location" type="text" label="Location" />
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
