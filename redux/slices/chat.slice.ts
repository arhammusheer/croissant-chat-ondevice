import { createSlice } from "@reduxjs/toolkit";

export interface Room {
  id: string;
  name: string;
}

export interface Message {
  id: string;
  roomId: string;
  userId: string;
  content: string;
}

export interface User {
  id: string;
  name: string;
}

const initialState = {
  rooms: {}, // { [roomId: string]: Room }
  messages: {}, // { [roomId: string]: Message[] }
  users: {}, // { [userId: string]: User }
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
});

export default chatSlice.reducer;
