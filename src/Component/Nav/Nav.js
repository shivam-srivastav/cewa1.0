import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import logo from "../../Assets/image/cewa.png";

const Nav = () => {
  const [NavButton, setNavButton] = useState(false);
  const onHandleButton = () => {
    setNavButton(!NavButton);
  };
  return (
    <div className="Nav">
      <div className="Nav-title">
        <Link to="./">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="Nav-li">
        <Link to="./about">
          <li>About us</li>
        </Link>
        <Link to="./Programs">
          <li>Our Program</li>
        </Link>
        <Link to="./gallery">
          <li>Gallery</li>
        </Link>
        <Link to="./membership">
          <li>Membership</li>
        </Link>

        <Link to="./contacts">
          <li>Contact Us</li>
        </Link>
      </div>
      <div className="Nav-search">
        <a href="https://www.hitwebcounter.com" target="blank">
          <img
            src="https://hitwebcounter.com/counter/counter.php?page=7348143&style=0006&nbdigits=5&type=ip&initCount=0"
            title="Web Counter"
            Alt="counter free"
            border="0"
          />
        </a>
      </div>
      <div className="Nav-button" onClick={onHandleButton}>
        <h1>≡</h1>
        {NavButton && (
          <div className="Nav-button-list">
            <Link to="./about">
              <li>About us</li>
            </Link>
            <Link to="./Programs">
              <li>Our Program</li>
            </Link>
            <Link to="./gallery">
              <li>Gallery</li>
            </Link>
            <Link to="./membership">
              <li>For Members</li>
            </Link>
            <Link to="./contacts">
              <li>Contact Us</li>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Nav;
