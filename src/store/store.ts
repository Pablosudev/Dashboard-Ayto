import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../modules/login/Features/authSlice";
import { newsReducer } from "../modules/news/Features/newsSlice";
import { eventReducer } from "../modules/events/Features/eventsSlice";



export const store = configureStore({
  reducer: {
    auth: authReducer,
    newsSlice: newsReducer,
    eventsSlice: eventReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
