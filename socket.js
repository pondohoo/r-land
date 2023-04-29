import { io } from "socket.io-client";

const URL = "http://localhost:8080";

export const socket = io(URL);

// USE THIS WHEN WE HAVE AUTH WORKING PROPERLY
// export const socket = io(URL, {
//     autoConnect: false
//   });
