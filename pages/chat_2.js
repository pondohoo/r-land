import React, { useEffect, useState } from "react";
import { socket } from "../socket";

const Chat = () => {
  const [message, setMessage] = useState("");

  const submit = () => {
    console.log(message);
  };

  useEffect(() => {
    console.log("SOCKET ON");

    socket.on("chat message", (msg) => {
      console.log(msg);
    });

    return () => {
      console.log("SOCKET OFF");
    };
  }, []);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        className="border-2"
      />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default Chat;
