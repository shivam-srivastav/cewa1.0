import React from "react";
import "./Nav.scss";
import logo from "../../Assets/image/pp.jpeg";
const Nav = () => {
  return (
    <div className="Nav">
      <div className="Nav-title">
        <img src={logo} alt="logo" />
      </div>
      <div className="Nav-li">
        <li>About</li>
        <li>Our Program</li>
        <li>Galary</li>
        <li>For Members</li>
        <li>Contact Us</li>
      </div>
      <div className="Nav-search">
        <input type="text" placeholder="Search"></input>
      </div>
    </div>
  );
};
export default Nav;
