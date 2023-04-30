import React from "react";
import Image from "next/image";
import patternBar from "../public/Pattern_bar.svg";
import collect from "../public/collect.svg";
import { motion } from "framer-motion";

const win = () => {
  return (
    <div className=" items-center flex-col flex h-screen w-screen relative">
      <p className="mt-[30%] text-white font-pirata text-7xl">FAILURE</p>
      <p className="mb-[10%] text-rland-red font-teko text-2xl">-3 points</p>
      <motion.div
        className="z-10 absolute top-[40%]"
        initial={{ opacity: 1, scale: 2 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 5 }}
      >
        <img src="/CardBack.svg" />
      </motion.div>
      <motion.a
        whileTap={{ opacity: 0.2 }}
        href="/collection"
        className="mt-[15%] animate-heart-pulse"
      >
        <Image className="mt-[450%]" src={collect} />
      </motion.a>

      <Image className="absolute top-3" src={patternBar} />
      <Image className="absolute bottom-3" src={patternBar} />
    </div>
  );
};

export default win;
