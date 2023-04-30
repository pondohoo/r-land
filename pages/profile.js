import React, { useState } from "react";
import Image from "next/image";
import porfileIMG from "../public/ProfileIMG.svg";
import { BsPlusCircle } from "react-icons/bs";
import PersonalStats from "../components/PersonalStats";
import AddFriends from "../components/AddFriends";

const profile = () => {
  const [addingFriends, setAddingFriends] = useState(false);
  return (
    <>
      {addingFriends ? (
        <AddFriends setAddingFriends={setAddingFriends} />
      ) : (
        <div className=" bg-rland-black flex font-teko items-center flex-col">
          <Image height={100} className=" my-8 rounded-full" src={porfileIMG} />
          <p className=" text-white text-5xl uppercase ">Menthy Wu</p>
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
