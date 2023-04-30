import React, { useState } from "react";
import UserContext from "./UserContext";
import { useContext, useEffect } from "react";

const Friend = ({ friend, setChat, setInChat, key }) => {
  const { user } = useContext(UserContext);
  const [friendName, setFriendName] = useState("");
  const gotoChat = () => {
    // const chatID =
    //   friend.friendID > user.uid
    //     ? friend.friendID + "-" + user.uid
    //     : user.uid + "-" + friend.friendID;
    // setChat(chatID);
    // setInChat(true);
  };
  useEffect(() => {
    if (friend.name1 == user.userName) setFriendName(friend.name2);
    else setFriendName(friend.name1);
  }, []);
  return (
    <div
      className={`flex flex-col items-center justify-center w-full ${
        key % 2 == 0 && "bg-[#282D30]"
      }`}
    >
      <button onClick={gotoChat} className="flex flex-row w-10/12 items-center">
        <div className="bg-[#956787] w-[70px] h-[70px] rounded-full flex items-center justify-center mr-5">
          <p className="font-teko text-5xl text-white">{friendName[0]}</p>
        </div>
        <div>
          <p className="text-white text-2xl font-teko">{friendName}</p>
          {/* <p className="text-white">{friend.lastMessage}</p> */}
          {/* <p className="text-white">{friend.lastTime}</p> */}
        </div>
      </button>
    </div>
  );
};

export default Friend;
