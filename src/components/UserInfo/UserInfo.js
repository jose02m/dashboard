import React from "react";
import "./UserInfo.scss";

function TopNav({ user }) {
  return (
    <div className="usr__info">
      <div className="usr__info__img">
        <img src={user.img} alt="" className="" />
      </div>
      <div className="usr__info__name">
        <span>{user.name}</span>
      </div>
    </div>
  );
}

export default TopNav;
