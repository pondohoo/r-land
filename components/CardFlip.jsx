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
    <motion.img
      layout="Layout"
      key="modal"
      className=" mx-5"
      src="/Card.svg"
      initial="initial"
      whileInView="inView"
      exit="exit"
      variants={variants}
    />
  );
};

export default CardFlip;
