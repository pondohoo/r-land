import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import PersonalStats from "../components/PersonalStats";
import AddFriends from "../components/AddFriends";
import UserContext from "../components/UserContext";
import { useContext } from "react";

const profile = () => {
  const [addingFriends, setAddingFriends] = useState(false);
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      {addingFriends ? (
        <AddFriends setAddingFriends={setAddingFriends} />
      ) : (
        <div className=" flex font-teko items-center flex-col justify-center h-full">
          <div className="bg-[#956787] w-[100px] h-[100px] rounded-full flex items-center justify-center mb-4">
            <p className="font-teko text-7xl text-white p-0">
              {user && user.userName[0]}
            </p>
          </div>
          <p className=" text-white text-5xl uppercase ">{user?.userName}</p>
          <button className=" text-rland-gray">EDIT</button>
          <button
            className=" mb-16  text-xl text-rland-red items-center flex flex-row"
            onClick={() => setAddingFriends(true)}
          >
            <BsPlusCircle className=" mr-3" />
            Add a Friend
          </button>
          <PersonalStats />
        </div>
      )}
    </>
  );
};

export default profile;
