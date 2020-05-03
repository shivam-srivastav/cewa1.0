import React from "react";
import "./Gallery.scss";
import g1 from "../../Assets/image/g1.jpg";
import g2 from "../../Assets/image/g2.jpg";
import g3 from "../../Assets/image/g3.jpg";
import g4 from "../../Assets/image/g4.jpg";
import g5 from "../../Assets/image/g5.jpg";
import g6 from "../../Assets/image/g6.jpg";
import g7 from "../../Assets/image/g7.jpg";
import g8 from "../../Assets/image/g8.jpg";

const Gallery = () => {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="row">
        <div className="col">
          <img src={g1} alt="g1" />
        </div>
        <div className="col">
          <img src={g2} alt="g2" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img src={g3} alt="g3" />
        </div>
        <div className="col">
          <img src={g4} alt="g4" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img src={g5} alt="g5" />
        </div>
        <div className="col">
          <img src={g6} alt="g6" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img src={g7} alt="g7" />
        </div>
        <div className="col">
          <img src={g8} alt="g8" />
        </div>
      </div>
    </div>
  );
};
export default Gallery;
