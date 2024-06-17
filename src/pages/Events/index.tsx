import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../redux/slice/event";
import { AppDispatch, RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";

export const Events: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const events = useSelector((state: RootState) => state.events.events);
  const loading = useSelector((state: RootState) => state.events.loading);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Event List</h1>
      <List>
        {events.map((event) => (
          <ListItem key={event.id} component={Link} to={`/event/${event.id}`}>
            <ListItemText primary={event.title} secondary={event.date} />
          </ListItem>
        ))}
      </List>
      <Button component={Link} to="/add" variant="contained" color="primary">
        Add Event
      </Button>
    </div>
  );
};
