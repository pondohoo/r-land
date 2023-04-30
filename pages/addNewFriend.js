import { useRouter } from "next/router";
import React from "react";
import UserContext from "../components/UserContext";
import { useContext } from "react";
import axios from "axios";

const addNewFriend = () => {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const { friendID, friendName } = router.query;

  console.log(user?.uid);
  const add = async () => {
    if (!user) {
      alert("fail send friend request to " + friendName);
      return;
    }
    if (user.uid == friendID) {
      alert("you cannot add yourself");
      return;
    }
    await axios.post("/api/addFriend", {
      friend: friendID,
      user: user.uid,
      name1: friendName,
      name2: user.userName,
    });
    alert("Friend request sent to " + friendName);
    router.push("/profile");
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-white text-3xl font-pirata">
        Add {friendName} as a friend
      </div>
      <button
        className="text-white bg-rland-red font-teko text-2xl py-2 px-4 mt-2"
        onClick={() => add()}
      >
        Confirm
      </button>
    </div>
  );
};

export default addNewFriend;
