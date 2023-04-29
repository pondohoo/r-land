import React from "react";
import BottomNav from "./BottomNav";

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <BottomNav />
    </>
  );
};

export default Layout;
