import React, { useContext, useState } from "react";
// import { socket } from "../socket";
import UserContext from "../components/UserContext";
import Image from "next/image";
import sendButton from "../public/sendButton.svg";
import ScrollableFeed from "react-scrollable-feed";

const Game = () => {
  const [message, setMessage] = useState("");
  const [messages] = useState([]);
  const { user } = useContext(UserContext);

  // const send = () => {
  //   setMessages([
  //     ...messages,
  //     { msg: message, name: user.name[0], uid: user.uid },
  //   ]);
  //   setMessage("");
  //   socket.emit("games", { msg: message, name: user.name[0], uid: user.uid });
  // };

  // useEffect(() => {
  //   socket.emit("join", "RANDOM ROOM ID");

  //   socket.on("games", (msg) => {
  //     setMessages((messages) => [
  //       ...messages,
  //       { name: msg.name[0], msg: msg.msg, uid: msg.uid },
  //     ]);
  //   });

  //   return () => {
  //     socket.off("games");
  //     socket.emit("leave", "RANDOM ROOM ID");
  //   };
  // }, []);

  return (
    <div className="mabsolute h-2/5 inset-x-0 bottom-10 flex flex-col justify-end bg-rland-darkgray/30">
      <div className="flex h-5/6 -mb-5 m-5 flex-col flex-none gap-2">
        <ScrollableFeed>
          {messages.map((msg, index) => (
            <div
              key={index}
              className="flex flex-none break-words items-center gap-1 text-white text-xl font-teko font-thin"
            >
              {user.uid == msg.uid ? (
                <div className="bg-rland-red h-5 w-1" />
              ) : (
                <div className="bg-rland-gray h-5 w-1" />
              )}
              <p className="">{msg.msg}</p>
            </div>
          ))}
        </ScrollableFeed>
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
  );
};

export default Game;
