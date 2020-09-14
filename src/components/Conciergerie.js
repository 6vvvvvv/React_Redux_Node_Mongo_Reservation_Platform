import React from "react";
import commingsoon from "../static/icons/coming-soon.png";
import "../static/css/Conciergerie.css";

const Conciergerie = () => {
  return (
    <div className="conciergerie-container">
      <img src={commingsoon} className="commingsoon" alt="commingsoon"></img>
    </div>
  );
};

export default Conciergerie;
