import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import type { EventItem } from '../../types/event';

interface EventsState {
  events: EventItem[];
  event: EventItem | null;
  eventsFetched: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: EventsState = {
  events: [],
  event: null,
  eventsFetched: false,
  loading: false,
  error: null,
};
export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_MOCK_URL}/api/events`);
    return response.data;
  } catch (error) {
    toast.error('Failed to fetch events');
    throw error;
  }
});

export const fetchEventById = createAsyncThunk('events/fetchEventById', async (id: number) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_MOCK_URL}/api/events/${id}`);
    return response.data;
  } catch (error) {
    toast.error('Failed to fetch event');
    throw error;
  }
});

export const addEvent = createAsyncThunk(
  'events/addEvent',
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_MOCK_URL}/api/events`,
        formData,
      );
      toast.success('Event added successfully!');
      return response.data;
    } catch (error) {
      toast.error('Failed to add event');
      throw error;
    }
  },
);

export const deleteEvent = createAsyncThunk('events/deleteEvent', async (id: number) => {
  try {
    await axios.delete(`${process.env.REACT_APP_SERVER_MOCK_URL}/api/events/${id}`);
    toast.success('The event has been removed from the list!');
    return id;
  } catch (error) {
    toast.error('Failed to delete event');
    throw error;
  }
});
const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
        state.eventsFetched = true;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch events';
      })
      .addCase(fetchEventById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEventById.fulfilled, (state, action: PayloadAction<EventItem>) => {
        state.loading = false;
        state.event = action.payload;
      })
      .addCase(fetchEventById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch event';
      })
      .addCase(addEvent.pending, (state) => {
        state.loading = true;
      })
      .addCase(addEvent.fulfilled, (state, action: PayloadAction<EventItem>) => {
        state.loading = false;
        state.eventsFetched = false;
        state.events.push(action.payload);
      })
      .addCase(addEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to add event';
      })
      .addCase(deleteEvent.fulfilled, (state, action: PayloadAction<number>) => {
        state.events = state.events.filter((event) => event.id !== action.payload);
      });
  },
});

export default eventsSlice.reducer;
