import React from "react";
import {
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
  arrayRemove,
} from "firebase/firestore";
import { useState } from "react";
import UserContext from "./UserContext";
import { useContext } from "react";
import { db } from "../firebase";

const AddFriends = ({ setAddingFriends }) => {
  const checkUser = (list, userID) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].friendID == userID) {
        console.log("has");
        return true;
      }
    }
    return false;
  };
  const [friendID, setFriendID] = useState("");
  const { user } = useContext(UserContext);

  const addFriend = async (friendID) => {
    if (friendID == user.uid) {
      alert("you cannot add yourself as a friend");
      return;
    }
    console.log(user.friendList);
    if (checkUser(user.friendList, friendID)) {
      alert("you already have this friend");
      return;
    }
    const friend = await getDoc(doc(db, "users", friendID));
    if (!friend.exists()) {
      alert("user not found");
      return;
    }
    // if the friedn is in my pending list
    if (checkUser(user.pendingList, friendID)) {
      console.log("the friedn is in my pending list");
      await updateDoc(doc(db, "users", user.uid), {
        pendingList: arrayRemove({
          friendID: friendID,
          friendName: friend.data().userName,
        }),
      });
      await updateDoc(doc(db, "users", user.uid), {
        friendList: arrayUnion({
          friendID: friendID,
          friendName: friend.data().userName,
        }),
      });
      await updateDoc(doc(db, "users", friendID), {
        friendList: arrayUnion({
          friendID: user.uid,
          friendName: user.userName,
        }),
      });
      alert("friend added");
      return;
    }
    if (checkUser(friend.data().pendingList, user.uid)) {
      alert("friend request already sent");
      return;
    }
    await updateDoc(doc(db, "users", friendID), {
      pendingList: arrayUnion({
        friendID: user.uid,
        friendName: user.userName,
      }),
    });
    alert("friend request send");
  };

  return (
    <div>
      <input
        className="border-black border-2 text-black"
        value={friendID}
        onChange={(input) => {
          setFriendID(input.target.value);
        }}
      />
      <span className="text-white">{friendID}</span>
      <button onClick={() => addFriend(friendID)}>add Friends</button>AddFriends
    </div>
  );
};

export default AddFriends;
