import { FC } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Chip,
} from '@mui/material';
import { PlaceOutlined, CalendarMonthOutlined } from '@mui/icons-material';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import routeRoutes from '../../../routes/routes';
import { DATETIME_FORMAT } from '../../../utils/dates';
import { EventItem } from '../../../types/event';
import { oneLineText } from '../../../theme/mixins';

export const EventCard: FC<Omit<EventItem, 'phone' | 'email'>> = ({
  id,
  title,
  image,
  date,
  description,
  location,
  type,
}) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, position: 'relative' }}>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <Typography gutterBottom variant="h5" sx={oneLineText}>
          {title}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <PlaceOutlined color="primary" />
          <Typography variant="body2">{location}</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <CalendarMonthOutlined color="primary" />
          <Typography gutterBottom variant="body2">
            {format(date, DATETIME_FORMAT)}
          </Typography>
        </Stack>
        <Chip label={type} color="primary" sx={{ position: 'absolute', top: 8, right: 8 }} />

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ ...oneLineText, marginTop: '10px' }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`${routeRoutes.events}/${id}`)}>
          Show More
        </Button>
      </CardActions>
    </Card>
  );
};
