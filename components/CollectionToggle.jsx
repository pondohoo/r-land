import React from "react";
import redCollectionList from "../public/redCollectionList.svg";
import RedBoxes from "../public/RedBoxes.svg";
import Image from "next/image";

const CollectionToggle = ({ setPageState }) => {
  return (
    <div className="bg-rland-darkgray flex top-7 fixed left-0 right-0 font-teko">
      <button
        onClick={() => {
          setPageState(true);
        }}
        className="w-full flex gap-2 flex-col"
      >
        <div className="flex h-3/4 items-center justify-center gap-3 text-rland-red">
          <Image className="h-3/4" src={redCollectionList} alt="" />
          <p>MY COLLECTION</p>
        </div>
        <hr className="border-rland-red w-full" />
      </button>
      <button
        onClick={() => {
          setPageState(false);
        }}
        className="w-full flex gap-2 flex-col"
      >
        <div className="flex h-3/4 items-center justify-center gap-3 text-rland-gray">
          <Image className="h-3/4" src={RedBoxes} alt="" />
          <p>ALL CARDS</p>
        </div>
        <hr className="border-rland-gray w-full" />
      </button>
    </div>
  );
};

export default CollectionToggle;
