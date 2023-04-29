import Image from "next/image";
import React from "react";
import usInRLand from "../public/UsInRland_Black.svg";
import bluryHeart from "../public/bluryheart.svg";
import glowCube from "../public/glowCube.svg";
import glowSpade from "../public/glowSpade.svg";
import patternBar from "../public/Pattern_bar.svg";
import enterNow from "../public/EnterNow.svg";
import { motion } from "framer-motion";

const startPage = () => {
  return (
    <div className=" max-h-screen relative flex bg-black w-screen h-screen flex-col items-center overflow-hidden">
      <Image className=" mt-[13%] z-10" src={usInRLand} />
      <Image className=" top-[15%] z-0 absolute max-w-lg" src={bluryHeart} />
      <div className=" h-1/6 w-1/3 mt-[30%] z-10 justify-evenly flex flex-row">
        <Image src={glowCube} />
        <Image src={glowSpade} />
        <Image src={glowCube} />
      </div>
      <Image className="absolute bottom-3" src={patternBar} />
      <motion.a className="mt-[65%]">
        <Image className=" opacity-80 scale-95" src={enterNow} />
      </motion.a>
    </div>
  );
};

export default startPage;
