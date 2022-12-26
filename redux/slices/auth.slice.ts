import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AUTH } from "../../API/auth.api";

interface User {
  id: string;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  token: null,
};

const login = createAsyncThunk<AuthState, { email: string; password: string }>(
  "auth/login",
  async ({ email, password }) => {
    const response = await AUTH.login(email, password);
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<AuthState>) => {
        state = action.payload;
      }
    );
    builder.addCase(login.rejected, (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    });
    builder.addCase(login.pending, (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    });
  },
});

export const authActions = {
  ...authSlice.actions,
  login,
};

export default authSlice.reducer;