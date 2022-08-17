import React, { useState, useEffect } from "react";
import NavCard from "./NavCard.js";
import "../styles/NavOptions.css";

const NavOptions = ({
  miPhones,
  redmiPhones,
  tv,
  laptop,
  fitnessAndLifeStyle,
  home,
  audio,
  accessories,
}) => {
  const [miPhoneToogle, setMiPhoneToogle] = useState(false);
  const [redmiPhoneToogle, setRedmiPhoneToogle] = useState(false);
  const [tvToogle, setTvToogle] = useState(false);
  const [laptopToogle, setLaptopToogle] = useState(false);
  const [fitnessToogle, setFitnessToogle] = useState(false);
  const [homeToogle, setHomeToogle] = useState(false);
  const [audioToogle, setAudioToogle] = useState(false);
  const [accessoriesToogle, setAccessoriesToogle] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/miphones") {
      return setMiPhoneToogle(true);
    }
    if (window.location.pathname === "/redmiphones") {
      return setRedmiPhoneToogle(true);
    }
    if (window.location.pathname === "/tv") {
      return setTvToogle(true);
    }
    if (window.location.pathname === "/laptops") {
      return setLaptopToogle(true);
    }
    if (window.location.pathname === "/miphones") {
      return setMiPhoneToogle(true);
    }
    if (window.location.pathname === "/lifestyle") {
      return setFitnessToogle(true);
    }
    if (window.location.pathname === "/home") {
      return setHomeToogle(true);
    }
    if (window.location.pathname === "/audio") {
      return setAudioToogle(true);
    }
    if (window.location.pathname === "/accessories") {
      return setAccessoriesToogle(true);
    }
  }, []);

  return (
    <div className="navOptions">
      {miPhoneToogle
        ? miPhones.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {redmiPhoneToogle
        ? redmiPhones.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {tvToogle
        ? tv.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {laptopToogle
        ? laptop.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {fitnessToogle
        ? fitnessAndLifeStyle.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {homeToogle
        ? home.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {audioToogle
        ? audio.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {accessoriesToogle
        ? accessories.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
    </div>
  );
};

export default NavOptions;
