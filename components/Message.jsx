import React from "react";
import UserContext from "./UserContext";
import { useContext } from "react";

const Message = ({ message, sender, time }) => {
  const { user } = useContext(UserContext);
  console.log(sender);
  console.log(user.userName);
  const fixDate = (date) => {
    const dateLocal = new Date(date);
    const newDate = new Date(
      dateLocal.getTime() - dateLocal.getTimezoneOffset() * 60 * 1000
    );
    return newDate;
  };
  return (
    <div className="w-full flex flex-row items-center justify-center">
      <div
        className={`w-10/12 flex flex-row items-center ${
          sender != user.userName ? "justify-start" : "justify-end"
        }`}
      >
        {sender != user.userName && (
          <div className="flex items-center">
            <div className="bg-[#956787] w-[30px] h-[30px] rounded-full flex items-center justify-center">
              <div>
                <p className="font-teko text-3xl text-white p-0 w-full ">
                  {sender && sender[0]}
                </p>
              </div>
            </div>
            <div className="m-2 w-1 h-8 bg-rland-red" />
          </div>
        )}
        <div
          className={`flex flex-col ${
            sender == user.userName ? "items-end" : "items-start"
          }`}
        >
          <p
            className={`${
              sender == user.userName ? "text-end" : "text-start"
            } text-base text-white text-teko break-all`}
          >
            {message}
          </p>
          <p className="text-xs text-rland-gray text-teko">
            {fixDate(new Date(time.seconds * 1000))
              .toUTCString()
              .replace(" GMT", "")}
            ;
          </p>
        </div>
        {sender == user.userName && (
          <div className="flex items-center flex-row">
            <div className="m-2 w-1 h-8 bg-rland-gray" />
            <div className="bg-[#956787] w-[30px] h-[30px] rounded-full flex items-center justify-center ">
              <p className="font-teko text-3xl text-white p-0">
                {user && user.userName[0]}
              </p>
            </div>
            <div className="w-1 h-full" />
          </div>
        )}
        {/* <p>{time}</p> */}
      </div>
    </div>
  );
};

export default Message;
