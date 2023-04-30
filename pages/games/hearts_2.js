import React, { useState } from "react";
import axios from "axios";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

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
    <div>
      {!image && (
        <Camera
          onTakePhoto={(dataUri) => {
            takePhoto(dataUri);
          }}
        />
      )}

      {image && <img src={image} />}

      <button onClick={execute}>Submit</button>
      <button onClick={() => setImage("")}>Cancel</button>

      {win && <p>YOU WON</p>}
    </div>
  );
};

export default Hearts;
