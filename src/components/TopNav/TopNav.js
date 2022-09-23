import React from "react";

import UserInfo from "../UserInfo/UserInfo";
import { data } from "../../constants";

import "./TopNav.scss";
import { BiMenu } from "react-icons/bi";

function TopNav() {
  return (
    <div className="topnav">
      <UserInfo user={data.user} />
      <div className="Sidebar-toggle">
        <BiMenu className="text-[3rem] text-purple-700 cursor-pointer" />
      </div>
    </div>
  );
}

export default TopNav;
