import React from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import TopNav from "../components/TopNav/TopNav";

import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Sidebar />
      <div className="main pl-[384px] overflow-x-hidden 2xl:w-[100vh] 2xl:pl-0">
        <div className="main__content min-h-[100vh] p-[48px] transition-all ease-in-out delay-[0.5s]
        2xl:p-[24px] 2xl:relative 2xl:bg-[#F3F4FA] 2xl:z-[100]">
          <TopNav />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
