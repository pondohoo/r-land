import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  BsFillSuitSpadeFill,
  BsFillSuitHeartFill,
  BsFillSuitClubFill,
  BsFillSuitDiamondFill,
} from "react-icons/bs";

const TopBar = () => {
  const router = useRouter();
  const [title, setTitle] = useState(null);

  useEffect(() => {
    if (router.asPath === "/collection") {
      setTitle("COLLECTION");
    } else if (router.asPath === "/ranking") {
      setTitle("RANKING");
    } else if (router.asPath === "/chat") {
      setTitle("CHAT");
    } else if (router.asPath === "/profile") {
      setTitle("PROFILE");
    } else if (router.asPath === "/map") {
      setTitle("MAP");
    }
  }, [router.asPath]);

  return (
    title && (
      <div className=" flex items-center justify-center bg-rland-black h-12 z-10">
        <div className=" items-center w-full font-pirata flex-row flex justify-evenly">
          <BsFillSuitSpadeFill className="text-white text-xl" />
          <BsFillSuitHeartFill className="text-rland-red text-xl" />
          <p className=" w-1/4 text-center text text-rland-gray text-2xl">
            {title}
          </p>
          <BsFillSuitClubFill className="text-white text-xl" />
          <BsFillSuitDiamondFill className="text-rland-red text-xl" />
        </div>
      </div>
    )
  );
};

export default TopBar;
