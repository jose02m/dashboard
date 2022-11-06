import React from "react";
import "./SumaryBox.scss";

function SumaryBox({item}) {
  return (
    <div className="sb">
      <div className="sb__info">
        <div className="sb__info__title">
          <div>{item.title}</div>
          <span>{item.subtitle}</span>
        </div>
        <div className="sb__info__value">
          {item.value}
        </div>
        <div className="sb__info__chart">
        </div>
      </div>
    </div>
  );
}

export default SumaryBox;
