import React from "react";
import g3 from "../../Assets/image/g3.jpg";
import g5 from "../../Assets/image/g5.jpg";
import g8 from "../../Assets/image/g6.jpg";
import { Tag1, Tag2, Tag3 } from "../../Assets/Data/data";
import "./Home.scss";

import NewsAndBlog from "./NewsAndBlog/NewsAndBlog";
import Vision from "./Vision/Vision";
import CarouselDisplay from "./CarouselDisplay/CarouselDisplay";
import BottomHome from "./BottomHome/BottomHome";

const Home = (props) => {
  return (
    <div className="Home">
      <CarouselDisplay />
      <div className="Home-vision">
        <Vision />
        <NewsAndBlog handleUrl={props.handleUrl} />
      </div>
      <BottomHome />
      {/* <div className="Event-update">
        <h1>Events And Camps</h1>
        <div className="events">
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
      </div>*/}
    </div>
  );
};
export default Home;
