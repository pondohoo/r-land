import React, { useState } from "react";
import ranking1 from "../public/ranking1.svg";
import ranking2 from "../public/ranking2.svg";
import ranking3 from "../public/ranking3.svg";
import ranking4 from "../public/ranking4.svg";
import ranking5 from "../public/ranking5.svg";
import PersonalStats from "../components/PersonalStats";
import axios from "axios";
import { useEffect } from "react";

import Image from "next/image";

const ranking = () => {
  const [rankingList, setRanking] = useState();
  useEffect(() => {
    axios("/api/getRanking").then((req) => {
      setRanking(req.data);
    });
  }, []);
  return (
    <div className="bg-rland-black">
      <div>
        {rankingList?.length > 0 && (
          <div className="relative">
            <div className="absolute w-3/4 h-full gap-8 flex justify-center items-center">
              <div className="bg-[#50beca] w-[70px] h-[70px] flex items-center justify-center">
                <p className="font-teko text-6xl text-center text-white p-0">
                  {rankingList[0].userName[0]}
                </p>
              </div>
              <div className="mt-2 flex flex-col">
                <p className="font-pirata text-3xl text-white">JOKER</p>
                <div className="flex gap-2">
                  <p className="font-teko font-thin text-2xl text-white">
                    {rankingList[0].userName}
                  </p>
                  <p className="font-teko text-3xl text-white font-bold">
                    {"| " + rankingList[0].score}
                  </p>
                </div>
              </div>
            </div>
            <Image priority className="w-screen h-auto" src={ranking1} alt="" />
          </div>
        )}
        {rankingList?.length > 1 && (
          <div className="relative">
            <div className="absolute top-0 right-0 w-3/4 h-full gap-8 flex justify-center items-center">
              <div className="mt-2 text-right flex flex-col">
                <p className="font-pirata text-3xl text-white">KING</p>
                <div className="flex gap-2">
                  <p className="font-teko text-3xl text-white font-bold">
                    {rankingList[1].score + " |"}
                  </p>
                  <p className="font-teko font-thin text-2xl text-white">
                    {rankingList[1].userName}
                  </p>
                </div>
              </div>
              <div className="bg-[#ae6dd4]  w-[70px] h-[70px] flex items-center justify-center">
                <p className="font-teko text-6xl text-center text-white p-0">
                  {rankingList[1].userName[0]}
                </p>
              </div>
            </div>
            <Image priority className="w-screen h-auto" src={ranking2} alt="" />
          </div>
        )}
        {rankingList?.length > 2 && (
          <div className="relative">
            <div className="absolute w-3/4 h-full gap-8 flex justify-center items-center">
              <div className="bg-[#81d366]  w-[70px] h-[70px] flex items-center justify-center">
                <p className="font-teko text-6xl text-center text-white p-0">
                  {rankingList[2].userName[0]}
                </p>
              </div>
              <div className="mt-2 flex flex-col">
                <p className="font-pirata text-3xl text-white">QUEEN</p>
                <div className="flex gap-2">
                  <p className="font-teko font-thin text-2xl text-white">
                    {rankingList[2].userName}
                  </p>
                  <p className="font-teko text-3xl text-white font-bold">
                    {"| " + rankingList[2].score}
                  </p>
                </div>
              </div>
            </div>
            <Image priority className="w-screen h-auto" src={ranking3} alt="" />
          </div>
        )}
        {rankingList?.length > 3 && (
          <div className="relative">
            <div className="absolute top-0 right-0 w-3/4 h-full gap-8 flex justify-center items-center">
              <div className="mt-2 text-right flex flex-col">
                <p className="font-pirata text-3xl text-white">KNIGHT</p>
                <div className="flex gap-2">
                  <p className="font-teko text-3xl text-white font-bold">
                    {rankingList[3].score + " |"}
                  </p>
                  <p className="font-teko font-thin text-2xl text-white">
                    {rankingList[3].userName}
                  </p>
                </div>
              </div>
              <div className="bg-[#f29640]  w-[70px] h-[70px] flex items-center justify-center">
                <p className="font-teko text-6xl text-center text-white p-0">
                  {rankingList[2].userName[0]}
                </p>
              </div>
            </div>
            <Image priority className="w-screen h-auto" src={ranking4} alt="" />
          </div>
        )}
        {rankingList?.length > 4 && (
          <div className="relative">
            <div className="absolute w-3/4 h-full gap-8 flex justify-center items-center">
              <div className="bg-[#50beca]  w-[70px] h-[70px] flex items-center justify-center">
                <p className="font-teko text-6xl text-center text-white p-0">
                  {rankingList[4].userName[0]}
                </p>
              </div>
              <div className="mt-2 flex flex-col">
                <p className="font-pirata text-3xl text-white">JACK</p>
                <div className="flex gap-2">
                  <p className="font-teko font-thin text-2xl text-white">
                    {rankingList[4].userName}
                  </p>
                  <p className="font-teko text-3xl text-white font-bold">
                    {"| " + rankingList[4].score}
                  </p>
                </div>
              </div>
            </div>
            <Image priority className="w-screen h-auto" src={ranking5} alt="" />
          </div>
        )}
      </div>
      <PersonalStats />
    </div>
  );
};

export default ranking;
