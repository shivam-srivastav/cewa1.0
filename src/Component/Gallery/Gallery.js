import React from "react";
import "./Gallery.scss";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Gallery">
        <div className="head">
          <div className="head-background">
            <h1>GALLERY</h1>
          </div>
          <div className="text"></div>
        </div>
        <div className="top">
          <h3>Event Name</h3> <h4>Date of Event</h4>
        </div>
        <div className="photoFrame">
          <div className="left">
            <div className="row1">
              <div className="photo1"></div>
            </div>
            <div className="row2">
              <div className="photo2"></div>
              <div className="photo2"></div>
            </div>
          </div>
          <div className="right">
            <div className="row1">
              <div className="photo3"></div>
              <div className="photo3"></div>
            </div>
            <div className="row2">
              <div className="photo4"></div>
              <div className="photo4"></div>
            </div>
          </div>
        </div>

        <div className="top">
          <h3>Event Name</h3> <h4>Date of Event</h4>
        </div>
        <div className="photoFrame">
          <div className="left">
            <div className="row1">
              <div className="photo1"></div>
            </div>
            <div className="row2">
              <div className="photo2"></div>
              <div className="photo2"></div>
            </div>
          </div>
          <div className="right">
            <div className="row1">
              <div className="photo3"></div>
              <div className="photo3"></div>
            </div>
            <div className="row2">
              <div className="photo4"></div>
              <div className="photo4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
