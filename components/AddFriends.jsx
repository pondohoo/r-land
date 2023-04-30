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

  // const { ref } = useZxing({
  //   onResult(result) {
  //     setFriendID(result.getText());
  //     alert("find");
  //   },
  // });

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
      <input
        className="border-black border-2 text-black"
        value={friendID}
        onChange={(e) => {
          setFriendID(e.target.value);
        }}
      />
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <QrScanner
        onDecode={(result) => console.log(result)}
        onError={(error) => console.log(error?.message)}
      />
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={user.uid}
        viewBox={`0 0 256 256`}
      />
      <span className="text-white">{friendID}</span>
      <button onClick={add}>Add Friends</button>
    </div>
  );
};

export default AddFriends;
