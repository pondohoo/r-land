import { io } from "socket.io-client";

const URL = "https://r-land-server-mugqodccoa-uw.a.run.app";

export const socket = io(URL, {
  autoConnect: false,
  transports: ["websocket", "polling"],
});
