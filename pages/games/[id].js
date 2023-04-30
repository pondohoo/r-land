import Image from "next/image";
import TapCard from "../../public/TapCard.svg";
import { useState } from "react";

const Game = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div className="h-full flex justify-center">
      <button onClick={handleClick} className="mt-10 w-9/12">
        <Image className="w-screen" src={TapCard} alt="" />
      </button>
    </div>
  );
};

export default Game;
