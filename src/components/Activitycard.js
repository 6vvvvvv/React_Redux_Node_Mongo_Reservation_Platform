import React from "react";
import { Link } from "react-router-dom";
import "../static/css/Activitycard.css";
import reserve from "../static/icons/reserve.png";

const Activitycard = (props) => {
  return (
    <div className="card hoverable">
      <div className="card-image ">
        <img src={props.img} className="card-img" alt="card-img" />
        <span className="card-title">{props.title}</span>
        <Link className="btn-floating halfway-fab waves-effect waves-light  blue ">
          <i className="material-icons">search</i>
        </Link>
      </div>
      <div className="card-content ">
        <p>{props.description}</p>
      </div>
      <img src={reserve} className="reserve " alt="reserve"></img>
      <i
        className="fas fa-calendar-alt know-more"
        data-tooltop={props.date}
      ></i>
    </div>
  );
};

export default Activitycard;
