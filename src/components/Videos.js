import React from "react";
import VideoCard from "./VideoCard.js";
import "../styles/Videos.css";

const Videos = ({ video }) => {
  return (
    <div className="videos">
      {videodata.map((user, index) => (
        <VideoCard
          index={index}
          key={user.image}
          image={user.image}
          name={user.name}
        />
      ))}
    </div>
  );
};

const videodata = [
  {
    name: "Xiaomi 11i ",
    image:
      "https://i02.appmifile.com/741_operator_in/07/02/2022/81abe053200c37736e75e090d32a5bcc.jpg?width=398&height=320",
  },
  {
    name: "Xiaomi OLED Vision TV 55",
    image:
      "https://i02.appmifile.com/181_operator_in/20/07/2022/089be547af3dce9aab7d3538bdc3ff72.jpg?width=398&height=320",
  },
  {
    name: "Xiaomi 11 lite NE 5G",
    image:
      "https://i02.appmifile.com/327_operator_in/07/02/2022/244bfd0645de5e7015460321203eb1f8.jpg?width=398&height=320",
  },
];
export default Videos;
