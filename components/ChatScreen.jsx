import React, { useContext, useEffect, useState } from "react";
import {
  onSnapshot,
  doc,
  updateDoc,
  arrayUnion,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import UserContext from "./UserContext";
import Message from "./Message";
import { BsSendFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import ScrollableFeed from "react-scrollable-feed";
const ChatScreen = ({ chat, setInChat }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const { user } = useContext(UserContext);
  const sendChat = async () => {
    await updateDoc(doc(db, "chats", chat), {
      messages: arrayUnion({
        message: message,
        time: Timestamp.now(),
        sender: user.userName,
      }),
    });
    setMessage("");
  };
  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "chats", chat), (doc) => {
      setMessages(doc.data().messages);
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="h-full bg-transparent">
      <div className=" bg-transparent text-white flex flex-col items-end h-[85%] mt-12">
        <ScrollableFeed>
          <div className=" flex flex-col justify-end items-center">
            {messages &&
              messages.map((message, index) => {
                console.log(message);
                return (
                  <Message
                    key={index}
                    sender={message.sender}
                    time={message.time}
                    message={message.message}
                  />
                );
              })}
          </div>
        </ScrollableFeed>
        <div className="w-11/12 fixed top-12 ">
          <button onClick={() => setInChat(false)}>
            <BsFillArrowLeftCircleFill className="text-rland-red text-3xl " />
          </button>
        </div>
        <div className="flex items-center fixed bottom-[60px] w-full bg-black pt-4 pb-6">
          <input
            className="text-white bg-rland-darkgray mx-4 p-2 w-10/12"
            value={message}
            onChange={(input) => {
              setMessage(input.target.value);
            }}
          />
          <button className="text-white" onClick={() => sendChat(message)}>
            <BsSendFill className="text-rland-red text-3xl mr-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
