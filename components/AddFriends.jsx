import React from "react";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { useState } from "react";
import UserContext from "./UserContext";
import { useContext } from "react";
import { db } from "../firebase";

const AddFriends = () => {
  const [fiendID, setFiendID] = useState("");
  const { user } = useContext(UserContext);

  const addFriend = async (fiendID) => {
    const docSnap = await getDoc(doc(db, "users", fiendID));
    if (!docSnap.exists()) {
      alert("user not found");
      return;
    }
    updateDoc(doc(db, "users", fiendID), {
      friendList: arrayUnion({ friendID: fiendID, status: "pending" }),
    }).then(
      updateDoc(doc(db, "users", user.uid), {
        friendList: arrayUnion({ friendID: user.uid, status: "not confirm" }),
      })
        .then(() => {
          alert("waiting for your friend to confirm");
        })
        .error(() => {
          console.log("error add friends");
        })
    );
  };
  return (
    <div>
      <div>{user?.uid}</div>
      <input
        className="border-black border-2"
        value={fiendID}
        onChange={(input) => {
          setFiendID(input.target.value);
        }}
      />
      <button onClick={() => addFriend(fiendID)}>add Friends</button>AddFriends
    </div>
  );
};

export default AddFriends;
