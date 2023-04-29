import React from "react";
import redCollectionList from "../public/redCollectionList.svg";
import RedBoxes from "../public/RedBoxes.svg";
import Image from "next/image";

const CollectionToggle = () => {
  return (
    <div className="flex font-teko">
      <div className="w-full flex gap-2 flex-col">
        <div className="flex h-3/4 items-center justify-center gap-3 text-rland-red">
          <Image className="h-3/4" src={redCollectionList} alt="" />
          <p>MY COLLECTION</p>
        </div>
        <hr className="border-rland-red w-full" />
      </div>
      <div className="w-full flex gap-2 flex-col">
        <div className="flex h-3/4 items-center justify-center gap-3 text-rland-gray">
          <Image className="h-3/4" src={RedBoxes} alt="" />
          <p>ALL CARDS</p>
        </div>
        <hr className="border-rland-gray w-full" />
      </div>
    </div>
  );
};

export default CollectionToggle;
