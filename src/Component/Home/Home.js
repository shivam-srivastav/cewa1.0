import React from "react";
import slide1 from "../../Assets/image/slide1.jpg";
import slide2 from "../../Assets/image/slide2.jpg";
import slide3 from "../../Assets/image/slide3.jpg";
import slide4 from "../../Assets/image/slide4.jpg";
import facebook from "../../Assets/image/facebook.svg";
import instagram from "../../Assets/image/instagram.svg";
import twitter from "../../Assets/image/twitter.svg";
import g3 from "../../Assets/image/g3.jpg";
import g5 from "../../Assets/image/g5.jpg";
import g8 from "../../Assets/image/g6.jpg";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { Tag1, Tag2, Tag3 } from "../../Assets/Data/data";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <Carousel className="carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption>
            <h3 className="corousel-h1">Face of Truth</h3>
            <p className="corousel-p">
              “A person's a person, no matter how small.”
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="corousel-h1">Keep Smiling</h3>
            <p className="corousel-p">
              There can be no keener revelation of a society's soul than the way
              in which it treats its children
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="corousel-h1">We are the Future</h3>
            <p className="corousel-p">
              Children are likely to live up to what you believe of them.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide4} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="corousel-h1">Gods of Heaven</h3>
            <p className="corousel-p">
              Children must be taught how to think, not what to think..
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="Home-vision">
        <div className="vision-text">
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
            <br />
            Will also carry out various child development projects to provide
            opportunities for the proper development of children. To mentor and
            provide guidance to the youth. To safeguard the rights of the child
            and provide for the well being of children in need, more
            particularly, Children deprived of education, Children suffering
            from ill health, physical and mental, Children exposed to any form
            of abuse.
          </p>
        </div>
        <div className="founder">
          <div>
            <h3> Connect With Us</h3>
            <div>
              <a href="https://www.facebook.com/CEWA-Childrens-Endorse-Welfare-Association-108023417567329/">
                <li>
                  <img src={facebook} alt="facebook" />
                </li>
              </a>
              <a href="https://www.instagram.com/_cewa__">
                <li>
                  <img src={instagram} alt="facebook" />
                </li>
              </a>
              <a href="https://www.twitter.com/NgoCewa">
                <li>
                  <img src={twitter} alt="facebook" />
                </li>
              </a>
            </div>
            <hr />
            <h3>Become a part of CEWA</h3>
            <div>
              <Link to="./membership">
                <span>
                  <p className="joinus">JOIN US</p>
                </span>
              </Link>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <br />
      <br />
      <h1>Events and Updates</h1>
      <div className="Event-update">
        <div className="event1">
          <img src={g3} alt="event1" />
          <p>{Tag1}</p>
        </div>
        <div className="event1">
          <img src={g5} alt="event2" />
          <p>{Tag2}</p>
        </div>
        <div className="event1">
          <img src={g8} alt="event3" />
          <p>{Tag3}</p>
        </div>
      </div>
    </div>
  );
};
export default Home;
