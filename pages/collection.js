import React from "react";
import Card from "../public/Card.svg";
import CardBack from "../public/CardBack.svg";
import LeftArrow from "../public/LeftArrow.svg";
import RightArrow from "../public/RightArrow.svg";
import Image from "next/image";

const collection = () => {
  return (
    <div className="flex flex-col justify-around w-full h-screen bg-rland-darkgray">
      <div className="left-0 right-0 top-5">Collection toggle</div>
      <div className="flex flex-col">
        <div className="flex justify-center items-center flex-col">
          <p className="text-white font-pirata text-3xl">SPADE 5</p>
          <p className="text-rland-gray font-teko text-xl">4.22.2023</p>
        </div>
        <div className="flex justify-center overflow-clip">
          <Image className="" priority src={CardBack} alt="" />

          <Image priority src={Card} alt="" />

          <Image priority src={CardBack} alt="" />
        </div>
        <div className="mx-auto font-thin text-2xl flex text-white font-teko flex-col text-left">
          <p className="m-0 text-left">3:00PM</p>
          <div className="m-0 text-rland-gray flex gap-2">
            <p className="m-0">LAT:14080923</p>
            <p className="m-0">LONG:123932</p>
          </div>
          <p className="m-0 text-rland-red">5 POINTS</p>
        </div>
      </div>
      <div className="h-1/3">
        <hr className="mt-10 border-rland-red" />
        <div className="bg-gradient-to-b opacity-20 from-rland-red w-screen h-1/3" />
        <div className="flex items-center justify-around">
          <Image priority src={LeftArrow} alt="" />
          <p className="text-rland-red font-teko text-2xl">25 points</p>
          <Image priority src={RightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default collection;
