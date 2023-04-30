import React, { useContext } from "react";
import Winning from "../components/Winning";
import UserContext from "../components/UserContext";

const win = () => {
  const { game } = useContext(UserContext);
  return (
    game && (
      <Winning
        points={game.points}
        pattern={game.pattern}
        number={game.number}
        time={3}
        lat={game.lat}
        long={game.lng}
      />
    )
  );
};

export default win;
