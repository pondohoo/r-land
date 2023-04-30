import { React } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const variants = {
  initial: {
    scale: 0.5,
    opacity: 0.3,
  },
  inView: {
    scale: 1,
    rotateY: 180,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

const CardFlip = ({ pattern, lat, time, long, points, number }) => {
  return (
    <div className="flex flex-col items-center h-full">
      <p className="text-white font-pirata text-3xl">
        {pattern + " " + number}
      </p>
      <p className="text-rland-gray font-teko text-xl">
        {time && new Date(time.seconds * 1000).toDateString()}
      </p>
      <motion.div
        key="modal"
        className=" mx-5"
        initial="initial"
        whileInView="inView"
        exit="exit"
        variants={variants}
      >
        <Image
          src="/Card.svg"
          className="min-w-[200px]"
          width={400}
          height={500}
          alt="card"
        />
        <div className=" -scale-x-100 mx-auto font-thin text-2xl flex text-white font-teko flex-col text-left">
          <div className="m-0 text-rland-gray flex gap-2">
            <p className="m-0">LAT:{lat}</p>
            <p className="m-0">LONG:{long}</p>
          </div>
          <p className="m-0 text-rland-red">{points} POINTS</p>
        </div>
      </motion.div>
    </div>
  );
};

export default CardFlip;
