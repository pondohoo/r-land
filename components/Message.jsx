import React from "react";

const Message = ({ message, sender, time }) => {
  return (
    <div>
      <p>{message}</p>
      {/* <p>{time}</p> */}
    </div>
  );
};

export default Message;
