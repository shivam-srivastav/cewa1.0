import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import logo from "../../Assets/image/pp.jpeg";
const Nav = () => {
  return (
    <div className="Nav">
      <div className="Nav-title">
        <img src={logo} alt="logo" />
      </div>
      <div className="Nav-li">
        <Link to="./about">
          <li>About us</li>
        </Link>
        <Link to="./Programs">
          <li>Our Program</li>
        </Link>
        <Link to="./Galaries">
          <li>Galary</li>
        </Link>
        <Link to="./member">
          <li>For Members</li>
        </Link>
        <Link to="./contacts">
          <li>Contact Us</li>
        </Link>
      </div>
      <div className="Nav-search">
        <input type="text" placeholder="Search"></input>
      </div>
    </div>
  );
};
export default Nav;
