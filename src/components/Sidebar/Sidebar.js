import { React, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

import { SidebarItems } from "../../Data/data";
import Logo from "../../imgs/logo.png";
import "./Sidebar.scss";

function Sidebar() {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="sidebar">
      {/*Logo*/}
      <div className="sidebar__logo flex h-[171px] items-center justify-center">
        <img src={Logo} alt="" className="h-[55px] w-[55px]" />
        <div className="sidebar__close cursor-pointer hidden">
          <MdOutlineClose className="text-[2rem]" />
        </div>
      </div>

      {/*Menu*/}
      <div className="sidebar__menu">
        {SidebarItems.map((item, index) => {
          return (
            <Link
              key={item.heading}
              to={item.Link}
              className={`sidebar__menu__item ${
                selectedItem === index && "active"
              }`}
              onClick={() => setSelectedItem(index)}
            >
              <div className="h-[40px] w-[40px] mr-[3rem] flex items-center justify-center">
                <item.icon className="text-[1.9rem]" />
              </div>
              <div className="">{item.heading}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
