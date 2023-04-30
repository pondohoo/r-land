import React, { useState } from "react";
import Card from "../public/Card.svg";
import Image from "next/image";
import CollectionToggle from "../components/CollectionToggle";
import CardDim from "../public/CardDim.svg";
import CardsFlip from "../components/CardsFlip";
// array of cards
const cards = [
  {
    id: 1,
    toggled: false,
  },
  {
    id: 2,
    toggled: false,
  },
  {
    toggled: false,
  },
  {
    id: 4,
    toggled: true,
  },
  {
    id: 5,
    toggled: false,
  },
  {
    id: 6,
    toggled: true,
  },
  {
    id: 7,
    toggled: false,
  },
  {
    id: 8,
    toggled: true,
  },
  {
    id: 9,
    toggled: false,
  },
  {
    id: 10,
    toggled: false,
  },
  {
    id: 11,
    toggled: true,
  },
  {
    id: 12,
    toggled: false,
  },
  {
    id: 13,
    toggled: true,
  },
  {
    id: 14,
    toggled: false,
  },
  {
    id: 15,
    toggled: true,
  },
  {
    id: 16,
    toggled: false,
  },
];

const collection = () => {
  const [pageState, setPageState] = useState(true);

  return pageState ? (
    <div className="flex flex-col justify-around items-stretch w-full h-full">
      <CollectionToggle setPageState={setPageState} pageState={pageState} />

      <div className="flex flex-col my-10">
        <div className="flex justify-center items-center flex-col">
          <p className="text-white font-pirata text-3xl">SPADE 5</p>
          <p className="text-rland-gray font-teko text-xl">4.22.2023</p>
        </div>
        <CardsFlip />
      </div>
      <div className=" h-full">
        <hr className=" border-rland-red" />
        <div className="bg-gradient-to-b opacity-20 from-rland-red w-screen h-1/5" />
        <div className="flex items-center justify-around">
          <p className="text-rland-red font-teko text-4xl">25 points</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-start w-full ">
      <div className="h-5/6 flex flex-col justify-center">
        <CollectionToggle setPageState={setPageState} pageState={pageState} />
        <div className="justify-center items-center gap-0 grid-cols-4 grid">
          {cards.map((card) => {
            return card.toggled ? (
              <div className="w-full h-full flex justify-center items-center">
                <Image className="w-3/4" key={card.id} src={Card} alt="" />
              </div>
            ) : (
              <div className="w-full h-full flex justify-center items-center">
                <Image className="" key={card.id} src={CardDim} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default collection;
