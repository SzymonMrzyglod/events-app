import { FC, useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Chip,
  Divider,
} from '@mui/material';
import { PlaceOutlined, CalendarMonthOutlined } from '@mui/icons-material';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import routeRoutes from '../../../routes/routes';
import { DATETIME_FORMAT } from '../../../utils/dates';
import { EventItem } from '../../../types/event';
import { oneLineText } from '../../../theme/mixins';
import { ConfirmModal } from '../ConfirmModal';

interface EventCardProps extends Omit<EventItem, 'phone' | 'email'> {
  onDelete: (id: number) => void;
}

export const EventCard: FC<EventCardProps> = ({
  id,
  title,
  image,
  date,
  description,
  location,
  type,
  onDelete,
}) => {
  const navigate = useNavigate();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const handleDelete = () => {
    onDelete(id);
    setShowConfirmModal(false);
  };

  return (
    <Card sx={{ maxWidth: 345, position: 'relative' }}>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <Typography gutterBottom variant="h5" sx={oneLineText}>
          {title}
        </Typography>
        <Divider sx={{ marginBottom: '8px' }} />
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
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size="small" onClick={() => navigate(`${routeRoutes.events}/${id}`)}>
          Show More
        </Button>
        <Button size="small" onClick={() => setShowConfirmModal(true)} color="error">
          Delete event
        </Button>
      </CardActions>
      <ConfirmModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleDelete}
        title={title}
        description="Are you sure you want to delete the event?"
      />
    </Card>
  );
};
