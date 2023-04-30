import React from "react";
import Wheel from "../components/Wheel";
const transition = () => {
  return (
    <div className="relative h-screen overflow-hidden justify-center items-center flex">
      <div className="animate-spin-slow">
        <Wheel />
      </div>
      <div className=" absolute animate-reverse-spin">
        <img className=" scale-[130%]" src="/InnerWheel.svg" />
      </div>
    </div>
  );
};

export default transition;
