import React, { useState } from "react";
import UserContext from "../components/UserContext";
import { useContext } from "react";
import FriendRequest from "../components/FriendRequest";
import Friend from "../components/Friend";
import ChatScreen from "../components/ChatScreen";
const chat = () => {
  const { user } = useContext(UserContext);
  const [chat, setChat] = useState("");
  const [inChat, setInChat] = useState(false);
  return (
    <>
      {inChat ? (
        <ChatScreen chat={chat} />
      ) : (
        <div>
          {user?.pendingList.map((friend) => {
            return <FriendRequest key={friend.friendID} friend={friend} />;
          })}
          {user?.friendList.map((friend, index) => {
            return (
              <Friend
                key={index}
                friend={friend}
                setChat={setChat}
                setInChat={setInChat}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default chat;
