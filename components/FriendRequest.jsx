import React from "react";
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import UserContext from "./UserContext";
import { useContext } from "react";

const FriendRequest = ({ friend }) => {
  const { user } = useContext(UserContext);
  const confirmFriend = async () => {
    await updateDoc(doc(db, "users", user.uid), {
      pendingList: arrayRemove({
        friendID: friend.friendID,
        friendName: friend.friendName,
      }),
    });
    await updateDoc(doc(db, "users", friend.friendID), {
      friendList: arrayUnion({
        friendID: user.uid,
        friendName: user.userName,
      }),
    });
    await updateDoc(doc(db, "users", user.uid), {
      friendList: arrayUnion({
        friendID: friend.friendID,
        friendName: friend.friendName,
      }),
    });
    const chatID =
      friend.friendID > user.uid
        ? friend.friendID + "-" + user.uid
        : user.uid + "-" + friend.friendID;
    const chatDoc = await getDocs(db, "chats", chatID);
    if (!chatDoc.exists()) {
      await setDoc(doc, (db, "chats", chatID), { messages: [] });
    }
    alert("friend added");
  };
  return (
    <div>
      <p>{friend.friendName}</p>
      <button onClick={() => confirmFriend(friend)}>confirm</button>
    </div>
  );
};

export default FriendRequest;
