import React from "react";
import greyProfile from "../public/grey_profile.svg";
import ranking1 from "../public/ranking1.svg";
import ranking2 from "../public/ranking2.svg";
import ranking3 from "../public/ranking3.svg";
import ranking4 from "../public/ranking4.svg";
import ranking5 from "../public/ranking5.svg";

import Image from "next/image";

const ranking = () => {
  return (
    <div>
      <div>
        <Image priority src={greyProfile} alt="" />
      </div>
      <div>
        <Image priority src={ranking1} alt="" />
      </div>
      <div>
        <Image priority src={ranking2} alt="" />
      </div>
      <div>
        <Image priority src={ranking3} alt="" />
      </div>
      <div>
        <Image priority src={ranking4} alt="" />
      </div>
      <div>
        <Image priority src={ranking5} alt="" />
      </div>
    </div>
  );
};

export default ranking;
