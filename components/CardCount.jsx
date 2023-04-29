import React from "react";
import Image from "next/image";
import spade from "../public/Spade.svg";
import heart from "../public/Heart.svg";
import diamond from "../public/Diamond.svg";
import cube from "../public/Cube.svg";

const CardCount = ({ type, number }) => {
  return (
    <div className=" items-center h-5/6 pr-8 flex w-full justify-between">
      {type == "spade" ? (
        <Image src={spade} />
      ) : type == "heart" ? (
        <Image src={heart} />
      ) : type == "diamond" ? (
        <Image src={diamond} />
      ) : (
        <Image src={cube} />
      )}
      <p className=" text-2xl font-pirata text-white ">{number}</p>
    </div>
  );
};

export default CardCount;
