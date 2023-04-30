import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Timer = ({ winState, timer }) => {
  const [progress, setProgress] = useState(100);
  const timerIncrements = timer / 100;
  const router = useRouter();

  useEffect(() => {
    progress > 0
      ? setTimeout(() => setProgress(progress - 1), timerIncrements)
      : router.push(winState ? "../win" : "../lose");
  }, [progress]);
  return (
    <div className="absolute h-100 w-full">
      <div
        className=" h-2 bg-rland-red"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default Timer;
