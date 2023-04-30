import React, { useEffect, useState } from "react";
import UserContext from "../components/UserContext";
import { useContext } from "react";
import FriendRequest from "../components/FriendRequest";
import Friend from "../components/Friend";
import ChatScreen from "../components/ChatScreen";
import axios from "axios";
const chat = () => {
  const { user } = useContext(UserContext);
  const [chat, setChat] = useState("");
  const [inChat, setInChat] = useState(false);
  const [friendRequests, setFriendRequests] = useState([]);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    if (user) {
      axios
        .post("/api/getFriendsRequests", { friend: user.uid })
        .then((res) => {
          setFriendRequests(res.data);
        });

      axios.post("/api/getFriends", { uid: user.uid }).then((res) => {
        setFriends(res.data);
      });
    }
  }, [user]);
  return (
    <>
      {inChat ? (
        <ChatScreen setInChat={setInChat} chat={chat} />
      ) : (
        <div>
          {friendRequests &&
            friendRequests.map((friend, index) => {
              return (
                <FriendRequest index={index} key={index} friend={friend} />
              );
            })}
          {friends &&
            friends.map((friend, index) => {
              return (
                <Friend
                  key={index}
                  index={index}
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
