import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import "../static/css/Activitycard.css";
import reserve from "../static/icons/reserve.png";

const Activitycard = (props) => {
  useEffect(() => {
    if (localStorage.length === 0) {
      props.history.push("/login");
    }
  }, [ props.history]);

  return (
    <div className="card hoverable">
      <div className="card-image ">
        <img src={props.img} className="card-img" alt="card-img" />
        <span className="card-title">{props.title}</span>
        <Link
          to={props.link}
          className="btn-floating halfway-fab waves-effect waves-light  blue "
        >
          <i className="material-icons">search</i>
        </Link>
      </div>
      <div className="card-content">
        <p>{props.description}</p>
      </div>
      <Link to={props.link}>
        <img src={reserve} className="reserve " alt="reserve"></img>
      </Link>
      <i
        className="fas fa-calendar-alt know-more"
        data-tooltop={props.date}
      ></i>
    </div>
  );
};

export default withRouter(Activitycard);
