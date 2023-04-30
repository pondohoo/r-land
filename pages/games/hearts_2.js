import React, { useState } from "react";
import axios from "axios";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import Timer from "../../components/Timer";
import { BsFillSendFill } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";

const Hearts = () => {
  const [image, setImage] = useState(null);
  const [win, setWin] = useState(false);

  const takePhoto = (dataUri) => {
    console.log(dataUri);
    setImage(dataUri);
  };

  const getBase64 = (file) => {
    return file.split(",")[1];
  };

  const execute = async () => {
    const base64 = getBase64(image);

    const response = await axios.post(
      `https://vision.googleapis.com/v1/images:annotate?key=${process.env.NEXT_PUBLIC_API_KEY}`,
      {
        requests: [
          {
            image: {
              content: base64,
            },
            features: [
              {
                type: "LABEL_DETECTION",
                maxResults: 1,
              },
            ],
          },
        ],
      }
    );

    console.log("MODEL DONE", response);

    if (
      response.data.responses[0].labelAnnotations[0].description ===
        "Forehead" &&
      response.data.responses[0].labelAnnotations[0].score > 0.75
    ) {
      setWin(true);
    }
  };

  return (
    <div className=" relative w-screen flex justify-start items-center flex-col">
      <Timer winState={win} timer={1000 * 20} />
      <img className=" left-[15%] top-[21%] absolute" src="/Rectangle 57.svg" />
      <img className=" left-[19%] top-[25%] absolute" src="/Group 59.svg" />
      <p className="mt-[5%] shadow-2xl text-6xl text-center text-rland-red font-pirata">
        {" "}
        WANTED
      </p>
      <p className="top-[27%] absolute text-white font-teko text-4xl">
        Norm the Orange
      </p>
      <div className="h-full mt-[30%] flex flex-col w-3/5 ">
        {!image && (
          <Camera
            onTakePhoto={(dataUri) => {
              takePhoto(dataUri);
            }}
          />
        )}

        {image && <img src={image} />}
        <div className="left-0 absolute flex justify-evenly top-[85%] w-screen">
          <button className=" text-white text-4xl" onClick={() => setImage("")}>
            <BsArrowRepeat />
          </button>
          <button className=" text-white text-3xl">
            <BsFillSendFill onClick={execute} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hearts;
