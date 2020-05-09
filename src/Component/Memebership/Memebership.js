import React from "react";
import "./Membership.scss";

import logo from "../../Assets/image/cewa.svg";
const Membership = () => {
  return (
    <div className="Membership">
      <div className="title">
        <h2>Membership Form</h2>
      </div>
      <form
        name="membership"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        method="POST"
      >
        <div className="Logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="pair">
          <div className="Mem">
            <input
              type="text"
              name=" Name of Applicant"
              size="25"
              placeholder="Name of Applicant"
            />
          </div>
          <div className="Mem">
            <input type="text" name="Age" size="25" placeholder="Age" />
          </div>
        </div>

        <div className="pair">
          <div className="Mem">
            <select name="Sex" placeholder="Sex">
              <option>Sex</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="Mem">
            <input
              type="text"
              size="25"
              name="Contact No."
              placeholder="Contact Number"
            />
          </div>
        </div>
        <div className="pair">
          <div className="Mem">
            <input
              type="text"
              name="Occupation"
              size="25"
              placeholder="Occupation"
            />
          </div>
          <div className="Mem">
            <input
              type="text"
              name="Current Address"
              size="25"
              placeholder="Current Address"
            />
          </div>
        </div>
        <div className="pair">
          <div className="Mem">
            <input
              type="text"
              size="25"
              name="Mailing Address"
              placeholder="Mailing Address"
            />
          </div>
          <div className="Mem">
            <input type="email" name="Email" size="25" placeholder="Email" />
          </div>
        </div>
        <div className="pair">
          <div className="Mem">
            <textarea
              rows="6"
              cols="28"
              size="25"
              name="Describe"
              placeholder="Describe the reason for wanting to be a memeber?"
            />
          </div>
        </div>
        <div className="para">
          <input type="checkbox"></input>
          <p>
            By filling up this form and verify Captcha, you have accepted to be
            a member of Children’s Endorse Welfare Association and will have to
            actively participate in all the events conducted by the association.
          </p>
        </div>
        <div className="logo">
          <div data-netlify-recaptcha="true"></div>
        </div>
        <input type="hidden" name="form-name" value="membership" />
        <div className="submit">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Membership;
