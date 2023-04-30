import React from "react";
import Image from "next/image";
import patternBar from "../public/Pattern_bar.svg";
import collect from "../public/collect.svg";
import { motion } from "framer-motion";

const win = () => {
  return (
    <div className=" items-center flex-col flex h-screen w-screen relative">
      <p className="mt-[30%] text-white font-pirata text-7xl">VICTORY</p>
      <p className="mb-[10%] text-rland-red font-teko text-2xl">+3 points</p>
      <motion.div
        className="z-10 absolute top-[25%]"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 5 }}
      >
        <img src="/CardGlowBack.svg" />
      </motion.div>
      <motion.div
        className="z-0 top-[35%] absolute"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        <img src="/Card.svg" />
      </motion.div>
      <motion.a
        whileTap={{ opacity: 0.2 }}
        href="/collection"
        className="animate-heart-pulse mt-[15%]"
      >
        <Image className="mt-[450%]" src={collect} />
      </motion.a>

      <Image className="absolute top-3" src={patternBar} />
      <Image className="absolute bottom-3" src={patternBar} />
    </div>
  );
};

export default win;
