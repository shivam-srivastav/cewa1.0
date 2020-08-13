import React from "react";
import video from "../../../Assets/video/video3.mp4";
class Video extends React.Component {
  render() {
    return (
      <video id="videoRG" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    );
  }
}

export default Video;
