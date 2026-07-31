import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../modules/login/Features/authSlice";
import { newsReducer, newsSlice } from "../modules/news/Features/newsSlice";



export const store = configureStore({
  reducer: {
    auth: authReducer,
    newsSlice: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
