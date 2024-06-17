import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { EventItem } from "../../types/event";
import axios from "axios";

interface EventsState {
  events: EventItem[];
  loading: boolean;
  error: string | null;
}

const initialState: EventsState = {
  events: [],
  loading: false,
  error: null,
};

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  const response = await axios.get(
    `http://localhost:${process.env.REACT_APP_SERVER_MOCK_PORT}/api/events`
  );
  return response.data;
});

const eventsSlice = createSlice({
  name: "events",
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
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch events";
      });
  },
});

export default eventsSlice.reducer;
