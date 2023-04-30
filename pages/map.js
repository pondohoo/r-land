import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  GoogleMap,
  useJsApiLoader,
  GroundOverlay,
  Marker,
} from "@react-google-maps/api";
import UserContext from "../components/UserContext";
import axios from "axios";
import Link from "next/link";

const Map = () => {
  const { position } = useContext(UserContext);
  const [games, setGames] = useState([]);
  const [valid, setValid] = useState(1);
  const [game, setGame] = useState({});
  const gameDate = new Date("2023-04-30T04:03:00");
  const gameDateCountdown = new Date("2022-04-30T04:19:30");
  const { setGameContext } = useContext(UserContext);

  const calculateTimeLeft = () => {
    const difference = +gameDate - +new Date();
    if (difference <= 0) {
      return 0;
    }
    const timeRemaining = {
      hours: Math.floor(difference / (1000 * 60 * 60)),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    return timeRemaining;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const calculateGameCountdown = () => {
    const difference = +gameDateCountdown - +new Date();
    if (difference <= 0) {
      return 0;
    }
    const timeRemaining = {
      hours: Math.floor(difference / (1000 * 60 * 60)),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    return timeRemaining;
  };
  const [countdown, setCountdown] = useState(calculateGameCountdown);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  });

  const onLoad = useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(position);
      map.fitBounds(bounds);
    },
    [position]
  );

  useEffect(() => {
    axios
      .post("/api/getGames")
      .then((response) => {
        setGames(response.data);
        determineValid(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    if (timeLeft !== 0) {
      const intervalId = setTimeout(
        () => setTimeLeft(calculateTimeLeft()),
        1000
      );
      return () => clearTimeout(intervalId);
    } else if (countdown !== 0) {
      const intervalId = setTimeout(
        () => setCountdown(calculateGameCountdown()),
        1000
      );
      return () => clearTimeout(intervalId);
    }
  }, [timeLeft, countdown]);

  const determineValid = (games) => {
    if (games.length === 0) {
      setValid(1);
      return;
    }
    games.forEach((game) => {
      if (
        game.lat - 0.001 <= position.lat &&
        position.lat <= game.lat + 0.001 &&
        game.lng - 0.001 <= position.lng &&
        position.lng <= game.lng + 0.001
      ) {
        setValid(2);
        setGame(game);
      }
    });
  };

  return (
    <div>
      {isLoaded && position && (
        <div className="absolute top-0 left-0">
          <div className="mt-12 bg-rland-black text-white flex justify-center items-center flex-col text-xl p-2">
            <p className="font-teko">
              {valid === 0 && "you are not within game range"}
              {valid === 1 && "there are no games nearby"}
              {valid === 2 && "you are within game range"}
            </p>
            <Link
              href={`/games/${game.card}`}
              onClick={() => {
                setGameContext({
                  points: 3,
                  pattern: "hearts",
                  number: 2,
                  lat: game.lat,
                  lng: game.lng,
                });
              }}
              className={`px-8 py-1 bg-rland-red font-pirata ${
                valid === 1 ? "hidden" : "block"
              } ${
                valid === 2 && timeLeft == 0
                  ? "!bg-rland-red"
                  : "!bg-rland-gray"
              }`}
            >
              {countdown != 0
                ? timeLeft != 0
                  ? timeLeft.minutes + ":" + timeLeft.seconds
                  : countdown.minutes + ":" + countdown.seconds
                : "GAME IN PROGRESS"}
            </Link>
          </div>
          <GoogleMap
            center={position}
            zoom={15}
            onLoad={onLoad}
            mapContainerStyle={{
              width: "100vw",
              height: "100vh",
            }}
            options={{
              streetViewControl: false,
              disableDoubleClickZoom: true,
              fullscreenControl: false,
              zoomControl: false,
              mapTypeControl: false,
            }}
          >
            {games.map((game, index) => (
              <GroundOverlay
                key={index}
                url="https://firebasestorage.googleapis.com/v0/b/r-land.appspot.com/o/mapRange.svg?alt=media&token=7567bf6d-8ccb-4c67-9001-42aeef98e67c"
                bounds={{
                  north: game.lat + 0.001, // LARGE 33.9756426
                  south: game.lat - 0.001, // SMALL 33.6756426
                  east: game.lng + 0.001, // LARGE -117.3265716
                  west: game.lng - 0.001, // SMALL -117.6265716
                }}
              />
            ))}
            <Marker position={position} />
          </GoogleMap>
        </div>
      )}
    </div>
  );
};

export default memo(Map);
