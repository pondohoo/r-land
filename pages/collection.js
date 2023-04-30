import React, { useState } from "react";
import Card from "../public/Card.svg";
import Image from "next/image";
import CollectionToggle from "../components/CollectionToggle";
import CardDim from "../public/CardDim.svg";
import CardFlip from "../components/CardFlip";
import UserContext from "../components/UserContext";
import { useContext } from "react";
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
  const { user } = useContext(UserContext);
  // console.log(user?.cardList.spade);

  return pageState ? (
    <div className=" flex flex-col justify-between w-full h-full">
      <CollectionToggle setPageState={setPageState} pageState={pageState} />

      <div className="flex flex-col  h-auto">
        <div className=" flex overflow-scroll">
          {user &&
            user.cardList.spade &&
            Object.entries(user?.cardList.spade).map((card, index) => {
              console.log(card);
              return (
                <CardFlip
                  pattern="spade"
                  key={index}
                  lat={card[1].lat}
                  long={card[1].long}
                  points={card[1].points}
                  time={card[1].time}
                  number={card[0]}
                />
              );
            })}
          {user &&
            user.cardList.heart &&
            Object.entries(user?.cardList.heart).map((card, index) => {
              console.log(card);
              return (
                <CardFlip
                  pattern="heart"
                  key={index}
                  lat={card[1].lat}
                  long={card[1].long}
                  points={card[1].points}
                  time={card[1].time}
                  number={card[0]}
                />
              );
            })}
          {user &&
            user.cardList.club &&
            Object.entries(user?.cardList.club).map((card, index) => {
              console.log(card);
              return (
                <CardFlip
                  pattern="club"
                  key={index}
                  lat={card[1].lat}
                  long={card[1].long}
                  points={card[1].points}
                  time={card[1].time}
                  number={card[0]}
                />
              );
            })}
          {user &&
            user.cardList.diamond &&
            Object.entries(user?.cardList.diamond).map((card, index) => {
              console.log(card);
              return (
                <CardFlip
                  pattern="diamond"
                  key={index}
                  lat={card[1].lat}
                  long={card[1].long}
                  points={card[1].points}
                  time={card[1].time}
                  number={card[0]}
                />
              );
            })}
        </div>
      </div>
      <div className="h-1/3">
        <hr className=" border-rland-red" />
        <div className="h-[60px] bg-gradient-to-b opacity-20 from-rland-red to-transparent w-screen "></div>
        {user && (
          <p className="text-rland-red font-teko text-4xl  w-full text-center">
            {user.score} points
          </p>
        )}
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
