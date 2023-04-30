import Image from "next/image";
import React from "react";
import usInRLand from "../public/UsInRland_Black.svg";
import bluryHeart from "../public/bluryheart.svg";
import glowCube from "../public/glowCube.svg";
import glowSpade from "../public/glowSpade.svg";
import patternBar from "../public/Pattern_bar.svg";
import { motion } from "framer-motion";
import LoginButton from "./LoginButton";

const StartPage = () => {
  return (
    <div className=" max-h-screen relative flex bg-black w-screen h-screen flex-col items-center overflow-hidden">
      <Image className=" mt-[13%] z-10" src={usInRLand} />
      <div className=" h-1/6 w-1/3 mt-[30%] z-10 justify-evenly flex flex-row">
        <Image src={glowCube} />
        <Image src={glowSpade} />
        <Image src={glowCube} />
      </div>
      <Image className="absolute bottom-3" src={patternBar} />
      <div className="flex justify-center animate-heart-pulse">
        <Image className=" top-[15%] z-0 absolute max-w-lg" src={bluryHeart} />
        <motion.a
          whileTap={{ opacity: 0.2, scale: 1 }}
          className=" duration-300   mt-[130%]"
        >
          <LoginButton />
        </motion.a>
      </div>
    </div>
  );
};

export default StartPage;
