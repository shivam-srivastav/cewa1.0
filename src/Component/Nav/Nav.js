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
        <a href="https://www.cewa.ga">
          <img src={logo} alt="logo" />
        </a>
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
      <div className="Counter">
        <div className="counter-text">
          <p>Total Visitor</p>
        </div>
        <div className="Counter-image">
          <img
            src="https://counter2.stat.ovh/private/freecounterstat.php?c=zhupfbms3z214j3mazufyphtq7eylhze"
            border="0"
            title="free counter"
            alt="free counter"
          />
        </div>
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
