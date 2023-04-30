import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsFillXDiamondFill, BsChatLeftTextFill } from "react-icons/bs";
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

  return (
    visible && (
      <div className="z-10">
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
