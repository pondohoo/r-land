import Image from "next/image";
import TapCard from "../../public/TapCard.svg";
import { useState } from "react";
import Timer from "../../components/Timer";
import { motion } from "framer-motion";

const Game = () => {
  const [count, setCount] = useState(0);
  const [win, setWin] = useState(false);
  const handleClick = () => {
    setCount(count + 1);
    if (count > 30) {
      setWin(true);
    }
    console.log(count);
  };
  return (
    <div className="h-full flex justify-center">
      <Timer timer={1000 * 20} winState={win} />
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={handleClick}
        className="mt-10 w-9/12"
      >
        <Image className="w-screen" src={TapCard} alt="" />
      </motion.button>
    </div>
  );
};

export default Game;
