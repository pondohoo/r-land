import React from "react";
import greyRanking from "../public/greyRanking.svg";
import greyBoxes from "../public/greyBoxes.svg";
import chat from "../public/chat.svg";
import Image from "next/image";
import profile from "../public/greyProfile.svg";
import mapButton from "../public/mapButton.svg";
import Link from "next/link";

const BottomNav = () => {
  return (
    <div className="">
      <Link href="/map">
        <Image className="mx-auto -my-7" src={mapButton} alt="" />
      </Link>
      <div className="bg-rland-black py-5 flex justify-around">
        <div className="flex w-1/2 gap-1 justify-evenly">
          <Link href="/collection">
            <Image src={greyBoxes} alt="" />
          </Link>
          <Link href="/ranking">
            <Image src={greyRanking} alt="" />
          </Link>
        </div>
        <div className="flex w-1/2 gap-1 justify-evenly">
          <Link href="/chat">
            <Image src={chat} alt="" />
          </Link>
          <Link href="/profile">
            <Image src={profile} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
