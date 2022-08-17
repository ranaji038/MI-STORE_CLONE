import React from "react";
import ProuductReviewCard from "./ProuductReviewCard.js";
import "../styles/ProuductReviews.css";

const ProuductReviews = ({ prouductReviews }) => {
  return (
    <div className="ProuductReviews">
      {prouductReviews.map((user, index) => (
        <ProuductReviewCard
          price={user.price}
          name={user.name}
          image={user.image}
          review={user.review}
          key={index}
          index={index}
        />
      ))}
    </div>
  );
};

// const data = [
//   {
//     image:
//       "https://i02.appmifile.com/259_operator_in/04/02/2022/f76f28e3d4f5b1fce78d461e12e00bc7.jpg?width=606&height=252",
//     review: "ALL ABOUT PERFORMANCE!",
//     name: "REDMI NOTE 11T 5G ",
//     price: "₹ 16,999",
//   },
//   {
//     image:
//       "https://i02.appmifile.com/149_operator_in/04/02/2022/7f9762559b5d78130b310719d37daaea.jpg?width=606&height=252",
//     review: "YOUR HOME-GUARD WITH HIGH RESOLUTION!",
//     name: "MI HOME SECURITY CAMERA 2K PRO ",
//     price: "₹ 4,999",
//   },
// ];

export default ProuductReviews;
