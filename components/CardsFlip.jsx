import React from "react";
import CardFlip from "./CardFlip";

const cards = [
	{
		id: 1,
	},
	{
		id: 2,
	},
	{
		id: 3,
	},
	{
		id: 4,
	},
	{
		id: 5,
	},
];

const CardsFlip = () => {
  return (
    <div className=" flex overflow-scroll">
    {cards.map((card) => (<CardFlip key={card.id}/>))}
    </div>
  );
};

export default CardsFlip;
