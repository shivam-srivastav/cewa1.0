import React from "react";
import blog1 from "../../../Assets/image/blog1.jpg";
import Calender from "../../../Assets/image/Calender.svg";
import "./NewsAndBlog.scss";
class NewsAndBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="newsandblog">
        <div className="News">
          <div className="head">
            <h2>Latest News</h2>
            <h5>View All</h5>
          </div>
          <div className="item">
            <div className="date">
              <span>25</span>
              <span className="month">
                <hr />
                <p>
                  May
                  <br />
                  2020
                </p>
              </span>
            </div>
            <div className="details">
              <p className="topic">
                {" "}
                <span> ≡ </span>Cewa News
              </p>
              <h5>
                India is fighting Covid-19 like Liberia fought the Ebola
                outbreak
              </h5>
              <p>
                Community based organisations have mounted Covid-19 responses by
                supporting quarantine facilities and providing ...{" "}
              </p>
            </div>
            <hr />
          </div>
        </div>
        <div className="blog">
          <div className="head">
            <h2>Recent Blogs</h2>
            <h5>View All</h5>
          </div>
          <div className="item">
            <div className="item-img">
              <img src={blog1} alt="blog1"></img>
            </div>
            <div className="item-text">
              <h3>Disaster struck caregivers: Revisiting Cyclone Fani</h3>
              <div className="user">
                <img
                  src="https://img.icons8.com/office/30/000000/user.png"
                  alt="user"
                />
                <p>Shivam Srivastava</p>
              </div>
              <div className="date">
                <img src={Calender} alt="calender" />
                <p>26-May-2020</p>
              </div>
              <div className="article">
                <p>
                  India’s eastern front in April of 2019 encountered one of its
                  biggest, strongest tropical cyclone to have stuck.....{" "}
                  <span>Read more</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsAndBlog;
