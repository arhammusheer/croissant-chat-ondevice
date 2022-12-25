import { Middleware } from "@reduxjs/toolkit";
import { API } from "../../constants/Network";

const websocketMiddleware: Middleware = (store) => (next) => (action) => {
  const ws = new WebSocket(`${API.WS}/ws`);

  ws.onopen = () => {
    console.log("Connected to websocket");
  };

  ws.onmessage = (event) => {
    console.log("Received message from websocket");
  };

  ws.onclose = () => {
    console.log("Disconnected from websocket");
  };
};
