import React from "react";
import CardFlip from "./CardFlip";

const CardsFlip = () => {
  return (
    <div className=" flex overflow-scroll">
      <CardFlip />
      <CardFlip />
      <CardFlip />
      <CardFlip />
      <CardFlip />
    </div>
  );
};

export default CardsFlip;
