import React from "react";
import "./Profile.scss";
import profile from "../../assets/profile.jpg";
import Insert from "./Insert/Insert.js";
import View from "./View/View.js";
import { Link } from "react-router-dom";
// import { FaUserAlt } from 'react-icons/fa';
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: true,
      insert: false,
    };
  }

  onClickView = () => {
    this.setState({ view: true, insert: false });
  };
  onClickInsert = () => {
    this.setState({ view: false, insert: true });
  };
  render() {
    return (
      <div className="profile">
        <div className="profile-title">
          <h4>
            <Link to="./">Shivam Srivastava</Link>
          </h4>
          <h4>
            <Link to="./">Sign out</Link>
          </h4>
        </div>
        <div className="profile-small">
          <div className="profile-small-photo">
            <img src={profile} alt="profile-pic" />
          </div>
          <div className="profile-small-id">
            <div>
              <h3>@its_shivam_srivastava</h3>
            </div>
            <div>
              <p>Be Weird. Your strangenessis your magic...</p>
            </div>
          </div>
        </div>
        <div className="profile-main">
          <div className="profile-main-left">
            <div className="profile-main-left-list">
              <li>Activity</li>
              <li>Profile</li>
              <li>Notification</li>
              <li>Gallery</li>
              <li>Settings</li>
            </div>
            <div className="profile-main-left-line"></div>
          </div>
          <div className="profile-main-right">
            <div className="profile-main-right-horizontal">
              <div onClick={this.onClickView}>
                <h4>View</h4>
              </div>
              <div onClick={this.onClickInsert}>
                <h4>Insert</h4>
              </div>
              <div>
                <h4>Create/Update Class</h4>
              </div>
            </div>
            <div className="profile-main-right-data">
              {this.state.view ? <View /> : <Insert />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
