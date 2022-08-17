import React from "react";
import "../styles/ProuductReviewCard.css";

const ProuductReviewCard = ({ image, index, price, review, name }) => {
  return (
    <div className="ProuductReviewCard">
      <img src={image} alt={`${index} review`} />
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  );
};

export default ProuductReviewCard;
