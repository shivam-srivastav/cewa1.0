import React from "react";
import "./BottomHome.scss";
import { Link } from "react-router-dom";
class BottomHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="bottomHome">
        <div className="back"></div>
        <div className="textBottom">
          <h2>
            <Link to="./gallery">Visit Gallery</Link>
          </h2>
        </div>
      </div>
    );
  }
}

export default BottomHome;
