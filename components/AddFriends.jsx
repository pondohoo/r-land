import React from "react";
import UserContext from "./UserContext";
import { useContext } from "react";
import QRCode from "react-qr-code";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
const AddFriends = ({ setAddingFriends }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-10/12 mt-6">
        <button onClick={() => setAddingFriends(false)}>
          <BsFillArrowLeftCircleFill className="text-rland-red text-3xl " />
        </button>
      </div>
      <p className="mt-3 mb-2 font-pirata text-4xl text-white">MY QR CODE</p>
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "80%", width: "80%" }}
        value={`https://r-land.vercel.app/addNewFriend?friendID=${user.uid}&friendName=${user.userName}`}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

export default AddFriends;
