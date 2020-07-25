import React, { useState } from "react";
import "./Gallery_old.scss";
// import g1 from "../../Assets/image/g1.jpg";
// import g2 from "../../Assets/image/g2.jpg";
// import g3 from "../../Assets/image/g3.jpg";
// import g4 from "../../Assets/image/g4.jpg";
// import g5 from "../../Assets/image/g5.jpg";
// import g6 from "../../Assets/image/g6.jpg";
// import g7 from "../../Assets/image/g7.jpg";
// import g8 from "../../Assets/image/g8.jpg";
import { image } from "./data";

console.log(image);
const Gallery = () => {
  const [main, setMain] = useState(0);

  var sectionStyle;
  image.map((item, key) => {
    if (key === main) {
      sectionStyle = {
        background: "url(" + item + ")",
        backgroundsize: "cover",
      };
    }
  });

  return (
    <div>
      <h1 className="heading1">CEWA-SHOTS</h1>
      <p className="warning">
        Sorry!, Gallery is only available in Desktop/Laptop Mode
      </p>
      <div className="gallery">
        <div className="strip">
          {image.map((item, key) => {
            console.log(item);
            return (
              <li className="strip-photos">
                <img
                  src={`${item}`}
                  key={key}
                  alt="photos"
                  onClick={() => {
                    setMain(key);
                  }}
                />
              </li>
            );
          })}
          {/* <li className="strip-photos">
            <img src={image.g2} alt="photos" />
          </li>
          <li className="strip-photos">
            <img src={image.g3} alt="photos" />
          </li>
          <li className="strip-photos">
            <img src={image.g4} alt="photos" />
          </li>
          <li className="strip-photos">
            <img src={image.g5} alt="photos" />
          </li>
          <li className="strip-photos">
            <img src={image.g6} alt="photos" />
          </li>
          <li className="strip-photos">
            <img src={image.g7} alt="photos" />
          </li>
          <li className="strip-photos">
            <img src={image.g8} alt="photos" />
          </li> */}
        </div>
        <div className="frame">
          <div className="background" style={sectionStyle}></div>
          <div className="text-over">
            <div className="text">
              <h5>
                Children are likely to live up to what you believe of them.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
