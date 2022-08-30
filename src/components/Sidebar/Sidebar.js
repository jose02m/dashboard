import { React, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { MdOutlineLogout, MdOutlineClose } from "react-icons/md";

import { SidebarItems } from "../../Data/data";
import Logo from "../../imgs/logo.png";

function Sidebar() {
  const menuItem =
    "flex items-center justify-start relative mb-[2rem] pl-[20%] transition-colors duration-[0.3s] ease-in-out hover:text-purple-700";

  const menuActive = "border-l-2 border-purple-700 text-purple-700 font-bold";
  
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="sidebar flex flex-col items-strech justify-start w-[348px] h-[100vh] fixed top-0 z-[100] bg-[#fff] text-[#4E4D4F]">
      {/*Logo*/}
      <div className="sidebar__logo flex h-[171px] items-center justify-center">
        <img src={Logo} alt="" className="h-[55px] w-[55px]" />
        <div className="cursor-pointer hidden 2xl:block">
          <MdOutlineClose className="text-[2rem]" />
        </div>
      </div>

      {/*Menu*/}
      <div className="sidebar__menu flex items-strech justify-start flex-col grow">
        {SidebarItems.map((item, index) => {
          return (
            <Link
              key={item.heading}
              to={item.Link}
              className={`${
                selectedItem === index ? menuItem + menuActive : menuItem
              }`}
              onClick={() => setSelectedItem(index)}
            >
              <div>
                <item.icon className="h-[40px] w-[40px] mr-[3rem] items-center justify-center"/>
              </div>rc
              <div>{item.heading}</div>
            </Link>
          );
        })}

        <div className={menuItem + ` bottom-[2.3rem] w-[100%]`}>
          <MdOutlineLogout />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
