import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import TopNav from "../components/TopNav/TopNav";

import './MainLayout.scss';

function MainLayout() {
  return (
    <>
      <Sidebar />
      <div className="main pl-[384px] overflow-x-hidden">
        <div className="main__content min-h-[100vh] p-[48px] transition-all ease-in-out delay-[0.5s]">
          <TopNav />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
