import { React } from "react";
import { motion } from "framer-motion";

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

const CardFlip = () => {
  return (
    <motion.div
      key="modal"
      className=" mx-5"
      initial="initial"
      whileInView="inView"
      exit="exit"
      variants={variants}
    >
      <img src="/Card.svg" />
      <div className=" -scale-x-100 mx-auto font-thin text-2xl flex text-white font-teko flex-col text-left">
        <p className="m-0 text-left">3:00PM</p>
        <div className="m-0 text-rland-gray flex gap-2">
          <p className="m-0">LAT:14080923</p>
          <p className="m-0">LONG:123932</p>
        </div>
        <p className="m-0 text-rland-red">5 POINTS</p>
      </div>
    </motion.div>
  );
};

export default CardFlip;
