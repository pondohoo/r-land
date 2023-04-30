import React from "react";
import Image from "next/image";
import collect from "../public/collect.svg";
import { motion } from "framer-motion";

const win = () => {
  return (
    <div className=" items-center flex-col flex h-screen w-screen relative">
      <p className="mt-[10%] text-white font-pirata text-7xl">VICTORY</p>
      <p className="mb-[10%] text-rland-red font-teko text-2xl">+3 points</p>
      <motion.div
        className="z-10 absolute top-[15%]"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 5 }}
      >
        <img src="/CardGlowBack.svg" />
      </motion.div>
      <motion.div
        className="z-0 top-[25%] absolute"
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
        <Image className="mt-[350%]" src={collect} />
      </motion.a>
    </div>
  );
};

export default win;
