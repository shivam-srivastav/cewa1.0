import React from "react";
import cewa from "../../Assets/image/cewa.png";
import {
  FcAddressBook,
  FcCellPhone,
  FcDepartment,
  FcGlobe,
} from "react-icons/fc";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="contact">
      <h1> Contact Us</h1>
      <div className="main">
        <div className="main-logo">
          <img src={cewa} alt="contact" />
        </div>
        <div className="main-text">
          <ul>
            <li>
              <span>
                <FcGlobe size="2rem" />
              </span>
              <a href="www.cewa.ga">
                <p>www.cewa.ga</p>
              </a>
            </li>
            <li>
              <span>
                <FcDepartment size="2rem" />
              </span>
              <p>653/A, Naiyyar Colony, Gonda pin - 27100</p>
            </li>
            <li>
              <span>
                <FcCellPhone size="2rem" />
              </span>
              <p>+91 987 023 3978</p>
            </li>
            <li>
              <span>
                <FcAddressBook size="2rem" />
              </span>
              <p>ngocewa@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Contact;
