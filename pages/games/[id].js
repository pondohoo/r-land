import React, { useContext, useEffect, useState } from "react";
import { socket } from "../../socket";
import UserContext from "../../components/UserContext";
import Image from "next/image";
import sendButton from "../../public/sendButton.svg";

const Game = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [count, setCount] = useState(0);
  const { user } = useContext(UserContext);

  const send = () => {
    setMessages([...messages, { msg: message, name: user.name[0] }]);
    setMessage("");
    socket.emit("games", { msg: message, name: user.name[0] });
  };

  const tap = () => {
    setCount(count + 1);
    console.log(count);
  };

  useEffect(() => {
    socket.emit("join", "RANDOM ROOM ID");

    socket.on("games", (msg) => {
      setMessages((messages) => [
        ...messages,
        { name: msg.name[0], msg: msg.msg },
      ]);
    });

    return () => {
      socket.off("games");
      socket.emit("leave", "RANDOM ROOM ID");
    };
  }, []);

  return (
    <div className="bg-rland-black h-full">
      <button onClick={tap}>TAP</button>
      <br />
      <div className="h-1/2 overflow-y-scroll absolute inset-x-0 bottom-10 flex flex-col justify-end bg-rland-darkgray/30">
        <div className="w-5/6 m-7 flex flex-col flex-none gap-2 h-full">
          {messages.map((msg, index) => (
            <div
              key={index}
              className="flex truncate items-center gap-1 text-white text-xl font-teko font-thin"
            >
              <div className="bg-rland-red h-5 w-1" />
              <p className="">{msg.msg}</p>
            </div>
          ))}
        </div>

        <div className="flex mb-10 inset-x-0 justify-center gap-5">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-3/4 bg-rland-darkgray"
          />
          <button onClick={send}>
            <Image src={sendButton} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
