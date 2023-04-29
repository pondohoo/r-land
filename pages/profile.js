import React from "react";
import Image from "next/image";
import porfileIMG from "../public/ProfileIMG.svg";
import { BsPlusCircle } from "react-icons/bs";
const profile = () => {
  return (
    <div className="flex font-teko items-center flex-col">
      <Image src={porfileIMG} />
      <p className=" uppercase ">Menthy Wu</p>
      <button>EDIT</button>
      <div>
        <BsPlusCircle />
        <button>Add a Friend</button>
      </div>
    </div>
  );
};

export default profile;
