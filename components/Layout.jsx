import React from "react";
import BottomNav from "./BottomNav";
import TopBar from "./TopBar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between w-screen h-screen bg-rland-black">
      <TopBar />
      <main>{children}</main>
      <BottomNav />
    </div>
  );
};

export default Layout;
