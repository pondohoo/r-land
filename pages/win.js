import React from "react";
import Winning from "../components/Winning";

const win = () => {
  return (
    <Winning points={3} card="spade" number={5} time={3} lat={14} long={123} />
  );
};

export default win;
