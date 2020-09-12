import React from "react";
import "../static/css/Sidebar.css";
import { Link } from "react-router-dom";
import logo from "../static/icons/Logo_SHAPY_VALIDE.png";

const Sidenav = () => {
  return (
    <div className="sidebar-container">
      <ul id="slide-out" className="sidenav">
        <li>
          <Link to="/" className="pulse">
            <img src={logo} className="logo" alt="logo"></img>
          </Link>
        </li>
        <li>
          <Link to="/" className="pulse">
            Bien-etre
          </Link>
        </li>
        <li>
          <Link to="/sport" className="pulse">
            Sport
          </Link>
        </li>
        <li>
          <Link to="/medecinedouce" className="pulse">
            Medecine douce
          </Link>
        </li>
        <li>
          <Link to="/culture" className="pulse">
            Culture
          </Link>
        </li>
        <li>
          <Link to="/conciergerie" className="pulse">
            Conciergerie
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
