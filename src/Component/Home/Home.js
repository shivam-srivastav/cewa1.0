import React from "react";
import slide1 from "../../Assets/image/slide1.jpg";
import slide2 from "../../Assets/image/slide2.jpg";
import slide3 from "../../Assets/image/slide3.jpg";
import slide4 from "../../Assets/image/slide4.jpg";
import shiwam from "../../Assets/image/shivam.jpg";
import event1 from "../../Assets/image/1.jpg";
import event2 from "../../Assets/image/2.jpg";
import event3 from "../../Assets/image/3.jpg";
import Carousel from "react-bootstrap/Carousel";

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

      {/* <div className="Home-container-text">
        <h1>
          CEWA:
          <br />
          <span>
            Children’s Endore
            <br /> Welfare Association
            <br />
            <h3>Let The Entire Word Be Happy</h3>
          </span>
        </h1>
      </div>
      <div className="Home-container-img">
        <img src={cewa} alt="cewa" />
      </div> */}
      <div className="Home-vision">
        <div className="vision-text">
          <h2>Vision</h2>
          <p>
            : To work for the betterment of the underprivileged children so that
            they can enlighten the future of the world’s largest Democracy.
            We’ll provide all kind of help/support to children's who somehow are
            not able to manage the school fees as well as the basic needs
            required for a Secondary Student. Will also carry out
            various child development projects to provide opportunities for the
            proper development of children. To mentor and provide guidance to
            the youth. To safeguard the rights of the child and provide for the
            well being of children in need, more particularly, Children deprived
            of education, Children suffering from ill health, physical and
            mental, Children exposed to any form of abuse.
          </p>
        </div>
        <div className="founder">
          <img src={shiwam} alt="shivam" />
          <div>
            <h3>Founder: Beast</h3>
          </div>
        </div>
      </div>
      <h1>Events and Updates</h1>
      <div className="Event-update">
        <div className="event1">
          <img src={event1} alt="event1" />
          <p>
            Smile Foundation launches program to provide support to families
            affected by lockdown
          </p>
        </div>
        <div className="event1">
          <img src={event2} alt="event2" />
          <p>
            Smile Foundation's Child for Child department's national campaign:
            "Students say….Let's Win the Fight over Corona"
          </p>
        </div>
        <div className="event1">
          <img src={event3} alt="event3" />
          <p>
            Corporate and Youth run for child education at Tata Mumbai Marathon
            2020
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
