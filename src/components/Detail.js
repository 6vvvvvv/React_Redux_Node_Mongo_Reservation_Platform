import React, { useState } from "react";
import "../static/css/Detail.css";
import chip from "../static/icons/avatar.png";

const Detail = () => {
  const [togglefavorite, setTogglefavorite] = useState(false);

  const togglehandler = () => {
    setTogglefavorite(!togglefavorite);
  };

  return (
    <div className="detailcard hoverable">
      <nav className="detail-nav  ">
        <i className="fas fa-chevron-left arrow_back "></i>
        <span className="back ">Back</span>
        {togglefavorite ? (
          <i
            className="fas fa-heart already-favorite "
            onClick={togglehandler}
          ></i>
        ) : (
          <i className="far fa-heart favorite " onClick={togglehandler}></i>
        )}
      </nav>

      <div className="detail-photo">
        <img
          src="https://s8.gifyu.com/images/Run_interval_head_cut.jpg"
          className="detail-img"
          alt="detail-img"
        />
      </div>

      <div className="detail-description">
        <div className="book">
          <span className="detail-calendar-container">
            <i class="far fa-calendar-alt detail-calendar-icon"></i>
          </span>
        </div>
        <div className="content">
          <ul className="content-list">
            <li className="chip-item">
              <i class="fas fa-user-edit"></i> :
              <span className="chip">
                <img src={chip} alt="Contact Person" />
                Liu Wei
              </span>
            </li>
            <li>
              <i class="far fa-clock"></i> : 40 mins
            </li>
            <li>
              <i class="fas fa-tools"></i> : None
            </li>
          </ul>
        </div>
        <div className="paticipant">
          <span className><i class="fas fa-users"></i></span>
          
        </div>
      </div>
    </div>
  );
};

export default Detail;
