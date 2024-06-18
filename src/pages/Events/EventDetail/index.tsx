import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Phone, Email } from '@mui/icons-material';
import { format } from 'date-fns';
import { fetchEventById } from '../../../redux/slice/event';
import { AppDispatch, RootState } from '../../../redux/store';
import { DATETIME_FORMAT } from '../../../utils/dates';

export const EventDetail: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const event = useSelector((state: RootState) =>
    state.events.events.find((event) => event.id === Number(id)),
  );
  const loading = useSelector((state: RootState) => state.events.loading);

  useEffect(() => {
    if (id && !event) {
      dispatch(fetchEventById(Number(id)));
    }
  }, [dispatch, id, event]);

  if (loading || !event) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20%' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Card
      sx={{
        marginTop: '20px',
      }}
    >
      <Stack
        sx={{
          flexDirection: isDesktop ? 'row' : 'column-reverse',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', width: isDesktop ? '50%' : '100%' }}>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: '1',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography variant="h5">{event.title}</Typography>
              <Typography variant="body1" color="text.secondary">
                {event.location}
              </Typography>
              <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
              <Typography variant="body1" sx={{ mb: 1, fontWeight: 600 }}>
                Start: {format(event.date, DATETIME_FORMAT)}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {event.description}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Contact:
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Phone color="primary" />
                <Typography variant="body1">{event.phone}</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Email color="primary" />
                <Typography variant="body1">{event.email}</Typography>
              </Stack>
            </Box>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          image={event.image}
          alt={event.title}
          sx={{
            width: isDesktop ? '50%' : '100%',
            height: 'auto',
            objectFit: 'cover',
            flex: '0 0 auto',
          }}
        />
      </Stack>
    </Card>
  );
};
