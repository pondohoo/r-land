import React, { useContext } from "react";
import Image from "next/image";
import collect from "../public/collect.svg";
import { motion } from "framer-motion";
import Link from "next/link";
import UserContext from "../components/UserContext";
import axios from "axios";

const Lose = () => {
  const { user, setUser } = useContext(UserContext);

  const removePoints = () => {
    axios.post("/api/removePoints", { uid: user.uid });
    setUser({ ...user, score: user.score - 3 });
  };

  return (
    <div className=" items-center flex-col flex h-screen w-screen relative">
      <p className="mt-[10%] text-white font-pirata text-7xl">FAILURE</p>
      <p className="mb-[10%] text-rland-red font-teko text-2xl">-3 points</p>
      <motion.div
        className="z-10 absolute top-[35%]"
        initial={{ opacity: 1, scale: 2 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 5 }}
      >
        <img src="/CardBack.svg" />
      </motion.div>
      <motion.div
        whileTap={{ opacity: 0.2 }}
        className="mt-[15%] animate-heart-pulse"
        onClick={removePoints}
      >
        <Link href="/collection">
          <Image className="mt-[450%]" src={collect} />
        </Link>
      </motion.div>
    </div>
  );
};

export default Lose;
