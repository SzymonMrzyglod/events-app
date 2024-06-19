import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Typography, Grid, Stack, Pagination, CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import { compareAsc, parseISO } from 'date-fns';
import { Helmet } from 'react-helmet';
import { usePagination } from '../../../hooks/usePagination';
import { AppDispatch, RootState } from '../../../redux/store';
import { deleteEvent, fetchEvents } from '../../../redux/slice/event';
import { EventItem } from '../../../types/event';
import { EventCard } from '../../../components/molecules';
import routeRoutes from '../../../routes/routes';

export const Events: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const events = useSelector((state: RootState) => state?.events?.events);
  const eventsFetched = useSelector((state: RootState) => state?.events?.eventsFetched);
  const loading = useSelector((state: RootState) => state?.events?.loading);

  const sortedEvents = events
    .slice()
    .sort((a, b) => compareAsc(parseISO(b.date), parseISO(a.date)));

  const { currentPage, totalPages, handlePageChange, paginatedItems } = usePagination<EventItem>({
    totalItems: sortedEvents.length,
    itemsPerPage: 6,
  });
  const paginatedEvents = paginatedItems(sortedEvents);

  const handleDeleteEvent = (id: number) => {
    dispatch(deleteEvent(id));
  };

  useEffect(() => {
    if (!eventsFetched) {
      dispatch(fetchEvents());
    }
  }, [dispatch, events.length]);

  if (loading) return <CircularProgress />;
  return (
    <>
      <Helmet>
        ‍<title>Events</title>‍
        <meta name="description" content="Find the best events in your area" />
      </Helmet>
      <Box component="section" sx={{ p: 4 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h4" component="h2" sx={{ p: 2 }}>
            Event List
          </Typography>
          <Button component={Link} to={routeRoutes.addEvent} variant="outlined">
            Add Event
          </Button>
        </Stack>
        <Grid container spacing={4}>
          {paginatedEvents.map((event) => {
            const { id, title, date, description, image, type, location } = event;
            return (
              <Grid item key={id} xs={12} sm={6} md={4}>
                <EventCard
                  id={id}
                  title={title}
                  date={date}
                  description={description}
                  location={location}
                  image={image}
                  type={type}
                  onDelete={() => handleDeleteEvent(id)}
                />
              </Grid>
            );
          })}
        </Grid>
        <Stack spacing={2} sx={{ mt: 4 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(event, page) => handlePageChange(page)}
            color="primary"
          />
        </Stack>
      </Box>
    </>
  );
};
