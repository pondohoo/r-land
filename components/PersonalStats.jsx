import React from "react";
import greyProfile from "../public/greyProfile.svg";
import Image from "next/image";

const PersonalStats = () => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-center">
        <Image className="bg-white" priority src={greyProfile} alt="" />
        <p className="text-white font-teko font-thin">Your Name</p>
      </div>
      <div className="flex flex-col">
        <p className="text-rland-red font-teko">You are in the top 1%</p>
        <div className="flex">
          <p>520</p>
          <div className="grid">3 3 3 3</div>
        </div>
      </div>
    </div>
  );
};

export default PersonalStats;
