import React from "react";
import cewa from "../../Assets/image/img.jpg";
import shiwam from "../../Assets/image/shivam.jpg";
import event1 from "../../Assets/image/1.jpg";
import event2 from "../../Assets/image/2.jpg";
import event3 from "../../Assets/image/3.jpg";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-container-text">
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
      </div>
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
