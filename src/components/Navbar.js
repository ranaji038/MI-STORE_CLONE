import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const searchIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
    <path d="m15.938 17-4.98-4.979q-.625.458-1.375.719Q8.833 13 8 13q-2.083 0-3.542-1.458Q3 10.083 3 8q0-2.083 1.458-3.542Q5.917 3 8 3q2.083 0 3.542 1.458Q13 5.917 13 8q0 .833-.26 1.583-.261.75-.719 1.375L17 15.938ZM8 11.5q1.458 0 2.479-1.021Q11.5 9.458 11.5 8q0-1.458-1.021-2.479Q9.458 4.5 8 4.5q-1.458 0-2.479 1.021Q4.5 6.542 4.5 8q0 1.458 1.021 2.479Q6.542 11.5 8 11.5Z" />
  </svg>
);

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <a href="/">
          <img
            id="logoImage"
            src="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg"
            alt="Not"
          />
        </a>
      </div>

      <a className="navlinks" href="/miphones">
        Mi Phones
      </a>
      <a className="navlinks" href="/redmiphones">
        Redmi Phones
      </a>
      <a className="navlinks" href="/tv">
        TV
      </a>
      <a className="navlinks" href="/laptops">
        Laptops
      </a>
      <a className="navlinks" href="/lifestyle">
        Fitness & Lifestyle
      </a>
      <a className="navlinks" href="/home">
        Home
      </a>
      <a className="navlinks" href="/audio">
        Audio
      </a>
      <a className="navlinks" href="/accessories">
        Accessories
      </a>

      <div className="searchbox">
        <input type="text" name="search" placeholder="Search Product" />
        {searchIcon}
      </div>
    </div>
  );
};

export default Navbar;
