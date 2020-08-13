import React from "react";
import "./Home.scss";
import NewsAndBlog from "./NewsAndBlog/NewsAndBlog";
import Vision from "./Vision/Vision";
// import CarouselDisplay from "./CarouselDisplay/CarouselDisplay";
import BottomHome from "./BottomHome/BottomHome";
import Video from "./Video/Video";
const Home = (props) => {
  return (
    <div className="Home">
      {/* <CarouselDisplay /> */}
      <div className="videoframe">
        <div id="h11">
          <h1>"We are the Future"</h1>
          <p>
            There can be no keener revelation of a society's soul than the way
            in which it treats its children
          </p>
        </div>
        <Video />
      </div>
      <div className="Home-vision">
        <Vision />
        <NewsAndBlog handleUrl={props.handleUrl} />
      </div>
      <BottomHome />
    </div>
  );
};
export default Home;
