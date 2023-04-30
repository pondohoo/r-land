import React from "react";
import Image from "next/image";
import patternBar from "../public/Pattern_bar.svg";
import collect from "../public/collect.svg";
import CardBack from "../public/CardBack.svg";
import { motion } from "framer-motion";

const win = () => {
  return (
    <div className="items-center flex-col flex h-screen w-screen relative">
      <p className="mt-[30%] text-white font-pirata text-7xl">FAILURE</p>
      <p className="mb-[10%] text-rland-red font-teko text-2xl">-3 points</p>
      <Image className=" opacity-70" height={350} src={CardBack} />
      <motion.a
        whileTap={{ opacity: 0.2 }}
        href="/collection"
        className="mt-[15%]"
      >
        <Image src={collect} />
      </motion.a>

      <Image className="absolute top-3" src={patternBar} />
      <Image className="absolute bottom-3" src={patternBar} />
    </div>
  );
};

export default win;
