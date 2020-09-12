import React from "react";
import { Link } from "react-router-dom";
import "../static/css/Logout.css";
import avatar from "../static/icons/avatar.png";

const Logout = () => {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="row log-out-form">
      <form className="col s12 logout-inner-form">
        <i className="material-icons exit_to_app">exit_to_app</i>
        <div className="row avatar-icon">
          <img src={avatar} className="avatar-icon" alt="avatar-icon"></img>
        </div>
        <div className="row logout-btn-section">
          <button
            className="btn waves-effect waves-light logout-btn"
            type="submit"
            name="action"
            onClick={submit}
          >
            Exit
            <i className="material-icons right">send</i>
          </button>
        </div>
        <p className="return-home">
          Reture <Link to="/">Home</Link>
        </p>
      </form>
    </div>
  );
}

export default Logout;
