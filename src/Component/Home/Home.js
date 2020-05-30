import React from "react";
import g3 from "../../Assets/image/g3.jpg";
import g5 from "../../Assets/image/g5.jpg";
import g8 from "../../Assets/image/g6.jpg";
import { Tag1, Tag2, Tag3 } from "../../Assets/Data/data";
import "./Home.scss";

import NewsAndBlog from "./NewsAndBlog/NewsAndBlog";
import Vision from "./Vision/Vision";
import CarouselDisplay from "./CarouselDisplay/CarouselDisplay";

const Home = () => {
  return (
    <div className="Home">
      <CarouselDisplay />
      <div className="Home-vision">
        <Vision />
        <NewsAndBlog />
        {/* <div className="NewsFeed">
          <h1>Daily Upadtes</h1>
          <div className="post">
            <div className="postTitle">
              <img src={instagram} alt="img" />
              <div>
                <p>
                  <b>Global Warming</b>
                </p>
                <p>
                  <i>@shivam</i> <p className="date">15 May, 01:30 pm</p>
                </p>
              </div>
            </div>
            <div className="postImage">
              <img src={g3} alt="g3" />
            </div>
            <div className="postText">
              <p>
                Will also carry out various child development projects to
                provide opportunities for the proper development of children. To
                mentor and provide guidance to the youth. To safeguard the
                rights of the child and provide for the well being of children
                in need, more particularly, Children deprived of education,
                Children suffering from ill health, physical and mental,
                Children exposed to any form of abuse.
              </p>
            </div>
          </div>
          <div className="post">
            <div className="postTitle">
              <img src={instagram} alt="img" />
              <div>
                <p>
                  <b>Global Warming</b>
                </p>
                <p>
                  <i>@shivam</i>
                  <p className="date">12 May, 12:30 pm</p>
                </p>
              </div>
            </div>
            <div className="postImage">
              <img src={g3} alt="g3" />
            </div>
            <div className="postText">
              <p>
                Will also carry out various child development projects to
                provide opportunities for the proper development of children. To
                mentor and provide guidance to the youth. To safeguard the
                rights of the child and provide for the well being of children
                in need, more particularly, Children deprived of education,
                Children suffering from ill health, physical and mental,
                Children exposed to any form of abuse.
              </p>
            </div>
          </div>
        </div> */}
        {/* <div className="connect">
          <div className="icons">
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
            <div>
              <hr />
              <Link to="./membership">
                <span>
                  <p className="joinus">JOIN US</p>
                </span>
              </Link>
              <hr />
            </div>
          </div>
        </div> */}
      </div>
      <div className="Event-update">
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
      </div>
    </div>
  );
};
export default Home;
