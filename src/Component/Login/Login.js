import React, { Component } from "react";
import "./Login.scss";
import photo from "../../assets/ccmberpurple.png";
import { Link } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="login">
        <div className="Home-navbar">
          <h1>Home Quarntine</h1>
        </div>
        <div className="login-img">
          <img src={photo} name="photo" alt="pic" />
        </div>
        <div className="login-detail">
          <div className="login-detail-1">
            <h1 className="lg-dt-1-title">SIGN-IN</h1>

            <form>
              <div className="lg-dt-1-email">
                <input type="email" name="email" placeholder="Email"></input>
              </div>
              <br />
              <div className="lg-dt-1-password">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                ></input>
              </div>
              <br />
              <div className="lg-dt-1-checkbox">
                <input type="checkbox" name="checkbox"></input>
                <p>Save password</p>
              </div>
              <button className="lg-dt-1-button">
                <Link to="./profile">Sign-In</Link>
              </button>
              <div className="lg-dt-1-signup">
                <p>Don't have an account?</p>
                <div>
                  <Link to="./registration">Sign-Up</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
