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
          <h3>Best Of CEWA</h3> <h4>August</h4>
        </div>
        <div className="photoFrame">
          <div className="left">
            <div className="row1">
              <div className="photo1 ph51"></div>
            </div>
            <div className="row2">
              <div className="photo2 ph61"></div>
              <div className="photo2 ph62"></div>
            </div>
          </div>
          <div className="right">
            <div className="row1">
              <div className="photo3 ph71"></div>
              <div className="photo3 ph72"></div>
            </div>
            <div className="row2">
              <div className="photo4 ph81"></div>
              <div className="photo4 ph82"></div>
            </div>
          </div>
        </div>
        <div className="top">
          <h3>Lakhimpur Kheri Kit Distribution</h3> <h4>July 2020</h4>
        </div>
        <div className="photoFrame">
          <div className="left">
            <div className="row1">
              <div className="photo1 ph11"></div>
            </div>
            <div className="row2">
              <div className="photo2 ph21"></div>
              <div className="photo2 ph22"></div>
            </div>
          </div>
          <div className="right">
            <div className="row1">
              <div className="photo3 ph31"></div>
              <div className="photo3 ph32"></div>
            </div>
            <div className="row2">
              <div className="photo4 ph41"></div>
              <div className="photo4 ph42"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
