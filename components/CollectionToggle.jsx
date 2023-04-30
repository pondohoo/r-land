import React from "react";
import { BsInboxesFill, BsFillXDiamondFill } from "react-icons/bs";

const CollectionToggle = ({ setPageState, pageState }) => {
  return (
    <div className="w-full h-[30px] flex font-teko">
      <button
        onClick={() => {
          setPageState(true);
        }}
        className="flex gap-2 flex-col justify-center w-1/2 items-center"
      >
        <div
          className={`flex items-center gap-3 justify-center ${
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
        className="w-1/2 flex gap-2 flex-col items-center"
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
