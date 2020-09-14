import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import "../static/css/Navibar.css";
import { connect } from "react-redux";

const Navibar = (props) => {
  const [loggedin, setLoggedin] = useState(false);

  useEffect(() => {
    M.AutoInit();
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, { edge: "left" });
  }, []);
  useEffect(() => {
    setLoggedin(props.loginstatus);
  }, [props.loginstatus]);

  return (
    <div className="navibar-container">
      {loggedin ? (
        <ul className="navibar">
          <li className="navibar-list-item">
            <Link
              to="#"
              data-target="slide-out"
              className="sidenav-trigger show-on-large pulse"
            >
              <i className="material-icons">menu</i>
            </Link>
          </li>
          <li className="navibar-list-item">
            <Link to="/" className="pulse">
              Home
            </Link>
          </li>
          <li className="navibar-list-item">
            <Link to="/logout" className="pulse">
              Logout
            </Link>
          </li>
          <li className="navibar-list-item">
            <Link to="/myspace" className="pulse">
              My Space
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="navibar">
          <li className="navibar-list-item">
            <Link
              to="#"
              data-target="slide-out"
              className="sidenav-trigger show-on-large pulse"
            >
              <i className="material-icons">menu</i>
            </Link>
          </li>
          <li className="navibar-list-item">
            <Link to="/" className="pulse">
              Home
            </Link>
          </li>
          <li className="navibar-list-item">
            <Link to="/signup" className="pulse">
              Signup
            </Link>
          </li>
          <li className="navibar-list-item">
            <Link to="/login" className="pulse">
              Login
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loginstatus: state.accReducer.loggedin,
});

export default connect(mapStateToProps, null)(Navibar);
