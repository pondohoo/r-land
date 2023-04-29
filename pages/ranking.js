import React from "react";
import greyProfile from "../public/grey_profile.svg";
import Image from "next/image";

const ranking = () => {
  return (
    <div>
      <Image priority src={greyProfile} alt="" />
    </div>
  );
};

export default ranking;
