import React from "react";
import BottomNav from "./BottomNav";
import TopBar from "./TopBar";
const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen">
      <TopBar />
      <main>{children}</main>
      <BottomNav />
    </div>
  );
};

export default Layout;
