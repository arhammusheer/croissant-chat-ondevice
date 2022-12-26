import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice";
import chatSlice from "./slices/chat.slice";

const store = configureStore({
  reducer: {
    // Add your reducers here
    chat: chatSlice,
    auth: authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
