import React from "react";

const addNewFriend = ({ friendID, friendName }) => {
  console.log(friendID);
  console.log(friendName);

  const add = () => {
    axios.post("/api/addFriend", {
      friend: friendID,
      user: user.uid,
      name: friendName,
    });
    alert("Friend request sent to " + name);
  };

  return (
    <div>
      <div>{friendName} as a friend</div>
      <button onClick={() => add()}> Add</button>
    </div>
  );
};

export default addNewFriend;
