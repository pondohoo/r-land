import React from "react";
import Image from "next/image";
import Heart from "../public/Heart.svg";
import Club from "../public/Club.svg";
import Diamond from "../public/Diamond.svg";
import Spade from "../public/Spade.svg";

const TopBar = () => {
  return (
    <div className=" flex items-center justify-center bg-rland-black h-12">
      <div className=" items-center w-full font-pirata flex-row flex justify-evenly">
        <Image height={20} src={Spade} />
        <Image height={20} src={Heart} />
        <p className=" w-1/4 text-center text text-rland-gray text-2xl">
          Title
        </p>
        <Image height={20} src={Club} />
        <Image height={20} src={Diamond} />
      </div>
    </div>
  );
};

export default TopBar;
