import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice";
import chatSlice from "./slices/chat.slice";
import uiSlice from "./slices/ui.slice";

const store = configureStore({
  reducer: {
    // Add your reducers here
    chat: chatSlice,
    auth: authSlice,
    ui: uiSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
