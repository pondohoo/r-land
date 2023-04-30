import React from "react";
import UserContext from "./UserContext";
import { useContext } from "react";

const Friend = ({ friend, setChat, setInChat }) => {
  const { user } = useContext(UserContext);
  const gotoChat = () => {
    const chatID =
      friend.friendID > user.uid
        ? friend.friendID + "-" + user.uid
        : user.uid + "-" + friend.friendID;
    setChat(chatID);
    setInChat(true);
  };
  return (
    <button onClick={gotoChat}>
      <div>
        <p className="text-white">{friend.friendName}</p>
        <p className="text-white">{friend.lastMessage}</p>
        <p className="text-white">{friend.lastTime}</p>
      </div>
    </button>
  );
};

export default Friend;
