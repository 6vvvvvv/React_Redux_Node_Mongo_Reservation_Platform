import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import "../static/css/Navibar.css";

const Navibar = () => {
  useEffect(() => {
    M.AutoInit();
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, { edge: "left" });
  }, []);

  return (
    <div className="navibar-container">
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
    </div>
  );
};

export default Navibar;
