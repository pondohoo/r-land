import React from "react";
import BottomNav from "./BottomNav";
import TopBar from "./TopBar";
import Chat from "./Chat";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between w-screen h-screen bg-rland-black">
      <div className="h-11/12">
        <TopBar />
        <main className="h-full">{children}</main>
        {router.asPath.includes("games") ? <Chat /> : null}
        <BottomNav />
      </div>
    </div>
  );
};

export default Layout;
