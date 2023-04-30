import React from "react";
import { useState } from "react";
import UserContext from "./UserContext";
import { useContext } from "react";
import axios from "axios";
import QRCode from "react-qr-code";
import { QrScanner } from "@yudiel/react-qr-scanner";

const AddFriends = ({ setAddingFriends }) => {
  const [friendID, setFriendID] = useState("");
  const [name, setName] = useState();
  const { user } = useContext(UserContext);

  const add = () => {
    axios.post("/api/addFriend", {
      friend: friendID,
      user: user.uid,
      name: name,
    });
    alert("Friend request sent to " + name);
  };

  return (
    <div>
      <QrScanner
        onDecode={(result) => {
          setFriendID(result.split("_")[0]);
          setName(result.split("_")[1]);
        }}
        onError={(error) => console.log(error?.message)}
      />
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={`https://r-land.vercel.app/addNewFriend?friendID=${user.uid}friendName=${user.userName}`}
        viewBox={`0 0 256 256`}
      />
      <span className="text-white">{friendID + "_" + user.name}</span>
      <button onClick={add}>Add Friends</button>
    </div>
  );
};

export default AddFriends;
