import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import apiReducer from "./apiSlice";
import fetchReducer from "./fetchSlice";
import UserSlice from "./slice/UserSlice";
import savedArticlesReducer from "./savedArticlesSlice";
import notificationsReducer from "./notificationsSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    api: apiReducer,
    fetch: fetchReducer,
    users: UserSlice,
    savedArticles: savedArticlesReducer,
    notifications: notificationsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
