import React from "react";
import Card from "../public/Card.svg";
import CardBack from "../public/CardBack.svg";
import Image from "next/image";

const collection = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-rland-darkgray">
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
  );
};

export default collection;
