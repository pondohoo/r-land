import { io } from "socket.io-client";

const URL = "https://r-land-server-mugqodccoa-uw.a.run.app";

export const socket = io(URL, {
  autoConnect: false,
});
// export const socket = null;

// USE THIS WHEN WE HAVE AUTH WORKING PROPERLY
// export const socket = io(URL, {
//     autoConnect: false
//   });
