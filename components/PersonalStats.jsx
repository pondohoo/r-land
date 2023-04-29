import React from "react";
import Image from "next/image";

import Heart from "../public/Heart.svg";
import Club from "../public/Club.svg";
import Diamond from "../public/Diamond.svg";
import Spade from "../public/Spade.svg";
import greyProfile from "../public/GreyProfile.svg";

const PersonalStats = () => {
  return (
    <div className="w-full p-2 px-10 items-center gap-5 bg-rland-darkgray flex">
      <div className="h-full gap-2 flex flex-col">
        <Image
          className="w-full h-full bg-white"
          priority
          src={greyProfile}
          alt=""
        />
        <p className="text-white text-xl font-teko font-thin">Your Name</p>
      </div>
      <div className="flex w-3/4 flex-col">
        <p className=" text-rland-red text-2xl font-teko">
          You are in the top 1%
        </p>
        <div className="flex text-white gap-8">
          <p className="m-0 p-0 font-teko text-3xl text-white font-bold">520</p>
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
