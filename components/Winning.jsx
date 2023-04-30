import React from "react";
import Image from "next/image";
import collect from "../public/collect.svg";
import { motion } from "framer-motion";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";
import axios from "axios";
import UserContext from "./UserContext";
import { useContext } from "react";

const Winning = ({ pattern, number, points, time, lat, long }) => {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const back = async () => {
    console.log(user);
    // setUser({
    //   ...user,
    //   cardList: [
    //     ...user.cardList,
    //     {
    //       spade: {
    //         [number]: {
    //           lat: lat,
    //           long: long,
    //           points: points,
    //           time: time,
    //         },
    //       },
    //     },
    //   ],
    // });
    await axios.post("/api/addCard", {
      card: { pattern },
      number: { number },
      time: { time },
      points: { points },
      lat: { lat },
      long: { long },
      uid: user.uid,
    });

    router.push("/collection");
  };
  return (
    <div className=" items-center flex-col flex h-screen w-screen relative">
      <p className="mt-[10%] text-white font-pirata text-7xl">Acquire</p>
      <p className="m-2] text-white font-pirata text-5xl">
        {pattern + " " + number}
      </p>
      <p className="mb-[10%] text-rland-red font-teko text-3xl">
        {points + " points"}
      </p>
      <motion.div
        className="z-10 absolute top-[15%]"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 5 }}
      >
        <Image
          src="/Card.svg"
          className="min-w-[200px]"
          width={400}
          height={500}
          alt="card"
        />
      </motion.div>
      <motion.div
        className="z-0 top-[25%] absolute"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        <Image
          src="/Card.svg"
          className="min-w-[200px]"
          width={200}
          height={300}
          alt="card"
        />
      </motion.div>
      <div className="m-0 text-rland-gray flex gap-2 flex-col w-full mt-72">
        <p className="m-0 w-full text-rland-gray font-teko text-3xl text-center">
          {"LAT: " + lat + " LONG: " + long}
        </p>
      </div>
      <motion.a
        whileTap={{ opacity: 0.2 }}
        href="/collection"
        className="animate-heart-pulse mt-[15%]"
      >
        <Image className="mt-[350%]" src={collect} />
      </motion.a>
      <div className="absolute w-full flex items-center justify-center bottom-40">
        <button className="flex" onClick={() => back()}>
          <BsFillArrowLeftCircleFill className="text-rland-red text-5xl mr-3" />
          <p className="text-rland-red text-5xl font-teko p-0">BACK</p>
        </button>
      </div>
    </div>
  );
};

export default Winning;
