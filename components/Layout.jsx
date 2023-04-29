import React from "react";
import BottomNav from "./BottomNav";
import TopBar from "./TopBar";
const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      <main>{children}</main>
      <BottomNav />
    </>
  );
};

export default Layout;
