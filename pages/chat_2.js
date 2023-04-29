import React, { useEffect, useState } from "react";
import { socket } from "../socket";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState(0);

  useEffect(() => {
    socket.on("chat message", (arg) => {
      console.log(arg);
    });

    socket.on("room", (msg) => {
      console.log(msg);
      setMessages([...messages, msg]);
    });

    return () => {
      socket.off("chat message");
      socket.off("room");
    };
  }, []);

  const submit = () => {
    socket.emit("chat message", message);
  };

  const join = () => {
    socket.emit("join", room);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setRoom(e.target.value)}
        className="border-2"
      />
      <button onClick={join}>join room</button>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
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
