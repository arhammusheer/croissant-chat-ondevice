import axios from "axios";
import { API } from "../constants/Network";

const login = async (email: string, password: string) => {
  return await axios.post(`${API.URL}/auth/login`, { email, password });
};

const login_passwordless = async (email: string) => {
  return await axios.post(`${API.URL}/auth/passwordless`, { email });
};

const login_passwordlessCallback = async (code: string) => {
  return await axios.get(`${API.URL}/auth/passwordless/callback?code=${code}`);
};

const google_callback = async (token: string) => {
  return await axios.get(`${API.URL}/auth/google?token=${token}`);
};

export const AUTH = {
  login,
  login_passwordless,
  login_passwordlessCallback,
  google_callback,
};
