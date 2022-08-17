import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = ({ start }) => {
  return (
    <Carousel fade>
      {start.map((item, index) => (
        <Carousel.Item key={index} interval={3000}>
          <img
            className="d-block w-100"
            src={item}
            key={index}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
