import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
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
  const response = await axios.get(`${process.env.REACT_APP_SERVER_MOCK_URL}/api/events`);
  return response.data;
});

export const fetchEventById = createAsyncThunk('events/fetchEventById', async (id: number) => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_MOCK_URL}/api/events/${id}`);
  return response.data;
});

export const addEvent = createAsyncThunk(
  'events/addEvent',
  async (formData: FormData, { rejectWithValue }) => {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_MOCK_URL}/api/events`,
      formData,
    );
    return response.data;
  },
);

export const deleteEvent = createAsyncThunk('events/deleteEvent', async (id: number) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_MOCK_URL}/api/events/${id}`);
  return id;
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
