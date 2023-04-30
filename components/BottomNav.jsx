import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  BsFillSuitSpadeFill,
  BsFillSuitHeartFill,
  BsFillSuitClubFill,
  BsFillSuitDiamondFill,
  BsFillXDiamondFill,
  BsChatLeftTextFill,
} from "react-icons/bs";
import { AiFillTrophy } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiMapPin } from "react-icons/fi";

const BottomNav = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(null);

  useEffect(() => {
    if (router.asPath === "/collection") {
      setVisible("collection");
    } else if (router.asPath === "/ranking") {
      setVisible("ranking");
    } else if (router.asPath === "/chat") {
      setVisible("chat");
    } else if (router.asPath === "/profile") {
      setVisible("profile");
    } else if (router.asPath === "/map") {
      setVisible("map");
    }
  }, [router.asPath]);

  return router.asPath.includes("games") ? (
    <div className="-mt-2 flex items-center justify-center bg-gradient-to-t from-rland-black from-80% h-12">
      <div className=" items-center w-full font-pirata flex-row flex justify-evenly">
        <BsFillSuitSpadeFill className="text-white text-xl" />
        <BsFillSuitHeartFill className="text-rland-red text-xl" />
        <BsFillSuitClubFill className="text-white text-xl" />
        <BsFillSuitDiamondFill className="text-rland-red text-xl" />
        <BsFillSuitSpadeFill className="text-white text-xl" />
        <BsFillSuitHeartFill className="text-rland-red text-xl" />
        <BsFillSuitClubFill className="text-white text-xl" />
        <BsFillSuitDiamondFill className="text-rland-red text-xl" />
      </div>
    </div>
  ) : (
    visible && (
      <div className="">
        <div className="w-full flex justify-center items-center">
          <Link href="/map">
            <FiMapPin
              className={`${
                visible === "map"
                  ? "bg-rland-red text-rland-black"
                  : "text-rland-gray"
              }  z-100 text-6xl p-2  rounded-full -mb-10`}
            />
          </Link>
        </div>
        <div className="bg-rland-black py-5 flex justify-around">
          <div className="flex w-1/2 gap-1 justify-evenly">
            <Link href="/collection">
              <BsFillXDiamondFill
                className={`text-2xl ${
                  visible === "collection"
                    ? "text-rland-red"
                    : "text-rland-gray"
                }`}
              />
            </Link>
            <Link href="/ranking">
              <AiFillTrophy
                className={`text-2xl ${
                  visible === "ranking" ? "text-rland-red" : "text-rland-gray"
                }`}
              />
            </Link>
          </div>
          <div className="flex w-1/2 gap-1 justify-evenly">
            <Link href="/chat">
              <BsChatLeftTextFill
                className={`text-2xl ${
                  visible === "chat" ? "text-rland-red" : "text-rland-gray"
                }`}
              />
            </Link>
            <Link href="/profile">
              <CgProfile
                className={`text-2xl ${
                  visible === "profile" ? "text-rland-red" : "text-rland-gray"
                }`}
              />
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default BottomNav;
