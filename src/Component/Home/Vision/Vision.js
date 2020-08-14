import React from "react";
import "./Vision.scss";

import facebook from "../../../Assets/image/facebook.svg";
import instagram from "../../../Assets/image/instagram.svg";
import twitter from "../../../Assets/image/twitter.svg";
import slide4 from "../../../Assets/image/photos/pexels-artem-beliaikin-1153976.jpg";

class Vision extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="vision-text">
        <div className="vision-img">
          <img src={slide4} alt="img"></img>
          <h2>CEWA</h2>
          <p>"Let the entire world be happy"</p>
        </div>
        <div className="vision-body">
          <h2>Vision</h2>
          <p>
            To work for the betterment of the underprivileged children so that
            they can enlighten the future of the world’s largest Democracy.
            <br />
            <br />
            We’ll provide all kind of help/support to children's who somehow are
            not able to manage the school fees as well as the basic needs
            required for a Secondary Student.
            <br />
            Will also carry out various child development projects to provide
            opportunities for the proper development of children. To mentor and
            provide guidance to the youth. To safeguard the rights of the child
            and provide for the well being of children in need, more
            particularly, Children deprived of education, Children suffering
            from ill health, physical and mental, Children exposed to any form
            of abuse.
          </p>
          <ul>
            <a href="https://www.facebook.com/CEWA-Childrens-Endorse-Welfare-Association-108023417567329/">
              <li>
                <img src={facebook} alt="facebook" />
                <p>facebook</p>
              </li>
            </a>
            <a href="https://www.instagram.com/_cewa__">
              <li>
                <img src={instagram} alt="facebook" />
                <p>instagram</p>
              </li>
            </a>
            <a href="https://www.twitter.com/NgoCewa">
              <li>
                <img src={twitter} alt="facebook" />
                <p>twitter</p>
              </li>
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default Vision;
