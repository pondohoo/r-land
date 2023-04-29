import React from "react";
import Image from "next/image";
import CardCount from "../components/CardCount";
import porfileIMG from "../public/ProfileIMG.svg";
const PersonalStats = () => {
  return (
    <div className=" font-teko px-7 py-2 w-full items-center justify-center bg-rland-darkgray flex ">
      <div className=" w-11/12 flex flex-row justify-between items-center">
        <div className=" flex flex-col items-center">
          <Image height={70} src={porfileIMG} />
          <p className=" mt-2 text-white text-xl uppercase ">Menthy Wu</p>
        </div>
        <div className="pt-3 w-9/12">
          <p className=" text-2xl text-rland-red font-teko">
            You are in the top 1%
          </p>
          <div className="w-full flex-row flex justify-between">
            <p className="font-bold text-4xl text-white">520</p>
            <div className=" mt-5 grid grid-rows-2 grid-cols-2">
              <CardCount type="spade" number="1" />
              <CardCount type="heart" number="2" />
              <CardCount type="diamond" number="3" />
              <CardCount type="cube" number="4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalStats;
