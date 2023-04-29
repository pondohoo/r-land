import React from "react";
import Image from "next/image";
import porfileIMG from "../public/ProfileIMG.svg";
import { BsPlusCircle } from "react-icons/bs";
import PersonalStats from "../components/PersonalStats";

const profile = () => {
  return (
    <div className=" bg-rland-black flex font-teko items-center flex-col">
      <Image height={100} className=" my-8 rounded-full" src={porfileIMG} />
      <p className=" text-white text-5xl uppercase ">Menthy Wu</p>
      <button className=" text-rland-gray">EDIT</button>
      <button className=" mb-16  text-xl text-rland-red items-center flex flex-row">
        <BsPlusCircle className=" mr-3" />
        Add a Friend
      </button>
      <PersonalStats />
    </div>
  );
};

export default profile;
