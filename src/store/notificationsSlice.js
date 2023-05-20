import { createSlice } from "@reduxjs/toolkit";
import io from "socket.io-client";
const ENDPOINT = process.env.REACT_APP_API_URL;
const socket = io(ENDPOINT);

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    notificationsRequested: (state) => {
      state.loading = true;
      state.error = null;
    },
    notificationsReceived: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    notificationsRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    notificationAdded: (state, action) => {
      state.data.unshift(action.payload);
    },
  },
});

export const {
  notificationsRequested,
  notificationsReceived,
  notificationsRequestFailed,
  notificationAdded,
} = notificationsSlice.actions;

export const fetchNotifications = (userId, page, limit) => async (dispatch) => {
  dispatch(notificationsRequested());
  try {
    const response = await fetch(
      `${ENDPOINT}/notifications/${userId}?page=${page}&limit=${limit}`
    );
    const notifications = await response.json();
    dispatch(notificationsReceived(notifications));
  } catch (error) {
    dispatch(notificationsRequestFailed(error.message));
  }
};

export const createNotification = (notification) => (dispatch) => {
  dispatch(notificationAdded(notification));
};

export const subscribeToNotifications = (userId) => (dispatch) => {
  socket.on(`notification:${userId}`, (notification) => {
    dispatch(notificationAdded(notification));
  });
};

export default notificationsSlice.reducer;
