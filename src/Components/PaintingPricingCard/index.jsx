import React from "react";
import "./styles.css";

import starIco from "../../Assets/star.svg";

const PaintingPricingCard = ({ paintingInfo }) => {
  const { title, price, img } = paintingInfo;

  return (
    <div className="pricing-card">
      <img src={img} className="painting-img" />
      <div className="painting-info">
        <p className="title">{title}</p>
        <div>
          <span className="price">${price}</span>
          <span className="rating">
            <img src={starIco} />
            <img src={starIco} />
            <img src={starIco} />
            <img src={starIco} />
            <img src={starIco} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaintingPricingCard;
