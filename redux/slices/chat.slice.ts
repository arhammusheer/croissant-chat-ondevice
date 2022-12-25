import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Room {
  id: string;
  name: string;
}

export interface Message {
  id: string;
  roomId: string;
  userId: string;
  text: string;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  name: string;
}

export interface ChatState {
  rooms: { [roomId: string]: Room };
  messages: {
    [roomId: string]: {
      [messageId: string]: Message;
    };
  };
  users: { [userId: string]: User };
}

const initialState: ChatState = {
  rooms: {}, // { [roomId: string]: Room }
  messages: {}, // { [roomId: string]: { [messageId: string]: Message } }
  users: {}, // { [userId: string]: User }
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    // Room actions
    addRoom: (state, action: PayloadAction<Room>) => {
      const room = action.payload;
      state.rooms[room.id] = room;
    },
    removeRoom: (state, action: PayloadAction<string>) => {
      const roomId: string = action.payload as string;
      delete state.rooms[roomId];
    },
    updateRoom: (state, action: PayloadAction<Room>) => {
      const room: Room = action.payload as Room;
      state.rooms[room.id] = room;
    },

    // Message actions
    addMessages: (state, action: PayloadAction<Message[]>) => {
      const messages: Message[] = action.payload as Message[];

      // Add the messages to the room
      for (let message of messages) {
        if (state.messages[message.roomId]) {
          state.messages[message.roomId][message.id] = message;
        }

        // Create the room if it doesn't exist
        else {
          state.messages[message.roomId] = {
            [message.id]: message,
          };
        }
      }
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      const message: Message = action.payload as Message;

      // Add the message to the room
      if (state.messages[message.roomId]) {
        state.messages[message.roomId][message.id] = message;
      }

      // Create the room if it doesn't exist
      else {
        state.messages[message.roomId] = {
          [message.id]: message,
        };
      }
    },

    removeMessage: (
      state,
      action: PayloadAction<{ roomId: string; messageId: string }>
    ) => {
      const roomId: string = action.payload.roomId;
      const messageId: string = action.payload.messageId;

      // Remove the message from the room
      delete state.messages[roomId][messageId];
    },
    updateMessage: (
      state,
      action: PayloadAction<{ roomId: string; message: Message }>
    ) => {
      const roomId: string = action.payload.roomId;
      const message: Message = action.payload.message;

      // Update the message in the room
      state.messages[roomId][message.id] = message;
    },

    // User actions
    addUser: (state, action: PayloadAction<User>) => {
      const user: User = action.payload as User;
      state.users[user.id] = user;
    },
    removeUser: (state, action: PayloadAction<string>) => {
      const userId: string = action.payload as string;
      delete state.users[userId];
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const user: User = action.payload as User;
      state.users[user.id] = user;
    },
  },
});

export const chatActions = {
  ...chatSlice.actions,
};

export default chatSlice.reducer;
