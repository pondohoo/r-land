import React, { useEffect } from "react";

const Timer = () => {
  const [progress, setProgress] = React.useState(100);
  useEffect(() => {
    progress > 0 && setTimeout(() => setProgress(progress - 1), 200);
    console.log(progress);
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
