import React, { useState, useEffect } from "react";
import "../static/css/Detail.css";
import chip from "../static/icons/avatar.png";
import { connect } from "react-redux";
import tips from "materialize-css/dist/js/materialize.min.js";
import { withRouter, useParams } from "react-router-dom";
import {
  addActivity,
  removeActivity,
} from "./redux/Account/action-creator/acc-actionCreators";
import {
  userReserve,
  userCancel,
} from "./redux/Activity/actions-creator/act-actionCreators";

const Detail = (props) => {
  const [togglefavorite, setTogglefavorite] = useState(false);
  const [confirm, setConfirm] = useState(false);
  let sportType = useParams();

  // const category = sportType.category;
  const type = sportType.type;
  // console.log("sport", props.sport);

  // console.log(props.sport[type]);

  const toggleconfirm = () => {
    setConfirm(!confirm);
    const userinfo = JSON.parse(localStorage.getItem("user"));
    const username = userinfo.username;
    const newact = { username: username, newactivity: type };
    console.log("newact", newact);
    confirm
      ? props.removeActivityfromacc(newact)
      : props.addActivitytoacc(newact);
    confirm
      ? props.removeActivityfromact(newact)
      : props.addActivitytoact(newact);
  };

  const togglehandler = () => {
    setTogglefavorite(!togglefavorite);
  };

  const goback = () => {
    props.history.goBack();
  };

  useEffect(() => {
    var elems = document.querySelectorAll(".tooltipped");
    tips.Tooltip.init(elems, {});
  }, []);

  const participantlist = props.accountInfo.filter((item) =>
    props.sport[type].paticipants.includes(item.username)
  );

  const courseinfo = props.sportdescription.find(
    (item) => item.title.toLowerCase() === type
  );

  const localuser = JSON.parse(localStorage.getItem("user"));
  const activeuser = localuser.username;

  const findUserInAcc = props.accountInfo.find(
    (item) => item.username === activeuser
  );

  useEffect(() => {
    setConfirm(findUserInAcc.joinactivity.includes(type));
  }, [findUserInAcc.joinactivity, type]);

  return (
    <div className="detailcard hoverable">
      <nav className="detail-nav  ">
        <i className="fas fa-chevron-left arrow_back" onClick={goback}></i>
        <span className="back " onClick={goback}>
          Back
        </span>
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
          src={props.sport[type].img}
          className="detail-img"
          alt="detail-img"
        />
        <button className="btn-floating pulse confirm-cancel-btn">
          {confirm ? (
            <i
              className="fas fa-times tooltipped"
              data-position="top"
              data-tooltip="CLick to cancel"
              onClick={toggleconfirm}
            ></i>
          ) : (
            <i
              className="fas fa-check tooltipped"
              data-position="top"
              data-tooltip="CLick to reserve"
              onClick={toggleconfirm}
            ></i>
          )}
        </button>
      </div>

      <div className="detail-description">
        <div className="book">
          <span className="detail-calendar-container">
            <i
              className="far fa-calendar-alt detail-calendar-icon tooltipped"
              data-position="top"
              data-tooltip={courseinfo.date}
            ></i>
          </span>
        </div>
        <div className="content">
          <ul className="content-list">
            <li className="chip-item">
              <i className="fas fa-user-edit"></i> :
              <span className="chip">
                <img
                  src={chip}
                  alt="Contact Person"
                  className="tooltipped"
                  data-position="top"
                  data-tooltip=" LIU WEI"
                />
                Liu Wei
              </span>
            </li>
            <li>
              <i className="far fa-clock"></i> :
              <span className="time">{props.sport[type].duration}</span>
            </li>
            <li>
              <i className="fas fa-tools"></i> :
              <span className="tool">{props.sport[type].tool}</span>
            </li>
          </ul>
        </div>
        <div className="paticipant">
          <div className="paticipant-icon ">
            <i className="fas fa-users participants"></i> :{" "}
            <span className="participant-count">
              {participantlist.length} participants
            </span>
          </div>
          <div className="paticipants-img-container">
            {participantlist.map((item, index) => (
              <img
                className="participants-confirm-img tooltipped"
                src={item.img}
                alt={item.username}
                data-position="top"
                data-tooltip={item.username}
                key={index}
              ></img>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  accountInfo: state.accReducer.account,
  sport: state.actReducer.activity.sport,
  sportdescription: state.actReducer.sport,
});

const mapDispatchToProps = (dispatch) => ({
  addActivitytoacc: (payload) => dispatch(addActivity(payload)),
  addActivitytoact: (payload) => dispatch(userReserve(payload)),
  removeActivityfromact: (payload) => dispatch(userCancel(payload)),
  removeActivityfromacc: (payload) => dispatch(removeActivity(payload)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail));
