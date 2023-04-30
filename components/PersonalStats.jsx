import React from "react";
import Image from "next/image";

import Heart from "../public/Heart.svg";
import Club from "../public/Club.svg";
import Diamond from "../public/Diamond.svg";
import Spade from "../public/Spade.svg";

import UserContext from "../components/UserContext";
import { useContext } from "react";
const PersonalStats = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-full p-2 px-10 items-center gap-5 bg-rland-darkgray flex">
      <div className="h-full gap-2 flex flex-col items-center justify-center">
        <div className="bg-[#956787] w-[100px] h-[100px] rounded-full flex items-center justify-center mt-2">
          <p className="font-teko text-7xl text-white p-0">
            {user?.userName[0]}
          </p>
        </div>
        <p className="text-white text-2xl font-teko font-thin">
          {user?.userName}
        </p>
      </div>
      <div className="flex w-3/4 flex-col">
        <p className=" text-rland-red text-2xl font-teko">
          You are in the top 1%
        </p>
        <div className="flex text-white gap-8">
          <p className="m-0 p-0 font-teko text-3xl text-white font-bold">
            {user?.score}
          </p>
          <div className="text-white text-2xl mt-3 font-pirata gap-x-8 grid grid-cols-2">
            <div className="flex items-center gap-3">
              <Image className="h-3/4" src={Spade} alt="" />
              <p>3</p>
            </div>
            <div className="flex items-center gap-3">
              <Image className="h-3/4" src={Diamond} alt="" />
              <p>3</p>
            </div>
            <div className="flex items-center gap-3">
              <Image className="h-3/4" src={Heart} alt="" />
              <p>3</p>
            </div>
            <div className="flex items-center gap-2">
              <Image className="h-3/4" src={Club} alt="" />
              <p>3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalStats;
