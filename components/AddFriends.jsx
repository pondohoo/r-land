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
import { QRCodeSVG } from "qrcode.react";
import { useZxing } from "react-zxing";

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
  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
    },
  });
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
        className="border-black border-2"
        value={friendID}
        onChange={(input) => {
          setFriendID(input.target.value);
        }}
      />
      <QRCodeSVG value={user.uid} size={300} />
      <button onClick={() => addFriend(friendID)}>add Friends</button>AddFriends
      <div className="sm:w-1/2 w-11/12 flex justify-center items-center">
        <video ref={ref} className="w-10/12 border-8 border-white" />
      </div>
    </div>
  );
};

export default AddFriends;
