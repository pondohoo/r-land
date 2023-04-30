import React from "react";
import axios from "axios";
import UserContext from "./UserContext";
import { useContext } from "react";

const FriendRequest = ({ friend, index }) => {
  const { user } = useContext(UserContext);
  const confirmFriend = () => {
    const code =
      user.uid > friend.user
        ? user.uid + "_" + friend.user
        : friend.user + "_" + user.uid;
    axios.post("/api/confirmFriend", { friendID: code });
  };
  return (
    <div
      className={`flex flex-row items-center w-full justify-center my-4 ${
        index % 2 == 0 ? "bg-rland-darkgray" : ""
      }`}
    >
      <div className="flex flex-row items-center justify-between w-10/12">
        <div className="flex flex-row justify-center items-center">
          <div className="bg-[#956787] w-[50px] h-[50px] rounded-full flex items-center justify-center ">
            <p className="font-teko text-5xl text-white p-0">
              {friend.name1[0]}
            </p>
          </div>
          <p className="text-white text-2xl font-teko ml-5">{friend.name1}</p>
        </div>
        <button
          className="text-white bg-rland-red py-1 px-4 font-teko text-xl"
          onClick={() => confirmFriend(friend)}
        >
          confirm
        </button>
      </div>
    </div>
  );
};

export default FriendRequest;
