import React, { useContext, useState, useEffect } from "react";
import { socket } from "../socket";
import UserContext from "../components/UserContext";
import Image from "next/image";
import sendButton from "../public/sendButton.svg";
import ScrollableFeed from "react-scrollable-feed";

const Game = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { user } = useContext(UserContext);

  const send = (e) => {
    e.preventDefault();
    setMessages([
      ...messages,
      { msg: message, name: user.name[0], uid: user.uid },
    ]);
    setMessage("");
    socket.emit("games", { msg: message, name: user.name[0], uid: user.uid });
  };

  useEffect(() => {
    socket.connect();
    socket.emit("join", "RANDOM ROOM ID");

    socket.on("games", (msg) => {
      setMessages((messages) => [
        ...messages,
        { name: msg.name[0], msg: msg.msg, uid: msg.uid },
      ]);
    });

    return () => {
      socket.off("games");
      socket.emit("leave", "RANDOM ROOM ID");
      socket.disconnect();
    };
  }, []);

  return (
    user && (
      <div className="mb-20 h-1/3 w-full left-0 bottom-24 flex flex-col justify-end bg-rland-darkgray/30">
        <div className="flex h-full flex-col items-end w-full justify-start">
          <ScrollableFeed className=" w-full flex h-full flex-col items-end justify-start">
            {messages.map((msg, index) => (
              <div
                key={index}
                className="ml-5 w-11/12 flex flex-none break-words items-center text-white text-xl font-teko font-thin "
              >
                {user.uid == msg.uid ? (
                  <div className="bg-rland-red h-5 w-1" />
                ) : (
                  <div className="bg-rland-gray h-5 w-1" />
                )}
                <p className="text-lg ml-2">{msg.msg}</p>
              </div>
            ))}
          </ScrollableFeed>
        </div>

        <form
          className="w-full flex -mb-12 items-center justify-center gap-5 fixed "
          onSubmit={send}
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-2 w-9/12 h-full bg-rland-darkgray text-white"
          />
          <button onClick={send}>
            <Image src={sendButton} alt="" />
          </button>
        </form>
      </div>
    )
  );
};

export default Game;
