import React from "react";
import "./User.css";

const User = (props) => {
  return (
    <div className="profile-container">
      <img
        src="https://img.etimg.com/thumb/msid-78162980,width-1200,height-900,imgsize-528761,overlay-etpanache/photo.jpg"
        alt="family"
      />
      <h2 className="profile-name">Vicram Rajesh</h2>
      <div className="profile-btn-container">
      <ul >
        <li>
          <span><i className="fas fa-chess"> </i>- Strategy</span>
        </li>
        <li>
          <span><i className="far fa-dot-circle"></i>-Points</span>
        </li>
        <li>
          <span><i className="fas fa-chart-bar"></i>-What if</span>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default User;
