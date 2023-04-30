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

const ChatScreen = ({ chat }) => {
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
    <div className="text-white">
      chatScreen
      {messages &&
        messages.map((message, index) => {
          console.log(message);
          return (
            <Message
              key={index}
              sender={user.userName}
              time={message.time}
              message={message.message}
            />
          );
        })}
      <input
        className="text-black"
        value={message}
        onChange={(input) => {
          setMessage(input.target.value);
        }}
      />
      <button className="text-white" onClick={() => sendChat(message)}>
        send
      </button>
    </div>
  );
};

export default ChatScreen;
