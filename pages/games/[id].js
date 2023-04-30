import React, { useContext, useEffect, useState } from "react";
import { socket } from "../../socket";
import UserContext from "../../components/UserContext";
import Image from "next/image";
import sendButton from "../../public/sendButton.svg";

const Game = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(["hi", "hi", "hi"]);
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
			<div className="inset-x-0 absolute bottom-0 bg-rland-yellow opacity-30">
				<button onClick={tap}>TAP</button>
				<br />
				{messages.map((msg, index) => (
					<div key={index} className="flex items-center">
						<div className="rounded-full bg-red-500 text-white w-8 h-8 flex justify-center items-center">
							{msg.name}
						</div>
						<p>{msg.msg}</p>
					</div>
				))}
				<div className="flex gap-5">
					<input
						type="text"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className="bg-rland-darkgray"
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
