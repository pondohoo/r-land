import React from "react";
import { BsInboxesFill, BsFillXDiamondFill } from "react-icons/bs";

const CollectionToggle = ({ setPageState, pageState }) => {
  return (
    <div className="bg-rland-darkgray flex font-teko">
      <button
        onClick={() => {
          setPageState(true);
        }}
        className="w-full flex gap-2 flex-col"
      >
        <div
          className={`flex h-3/4 items-center justify-center gap-3 ${
            pageState ? "text-rland-red" : "text-rland-gray"
          }`}
        >
          <BsInboxesFill
            className={`${pageState ? "text-rland-red" : "text-rland-gray"}`}
          />
          <p>MY COLLECTION</p>
        </div>
        <hr
          className={` w-full ${
            pageState ? "border-rland-red" : "border-rland-gray"
          }`}
        />
      </button>
      <button
        onClick={() => {
          setPageState(false);
        }}
        className="w-full flex gap-2 flex-col"
      >
        <div
          className={`flex h-3/4 items-center justify-center gap-3 ${
            !pageState ? "text-rland-red" : "text-rland-gray"
          }`}
        >
          <BsFillXDiamondFill
            className={`${!pageState ? "text-rland-red" : "text-rland-gray"}`}
          />
          <p>ALL CARDS</p>
        </div>
        <hr
          className={` w-full ${
            !pageState ? "border-rland-red" : "border-rland-gray"
          }`}
        />
      </button>
    </div>
  );
};

export default CollectionToggle;
