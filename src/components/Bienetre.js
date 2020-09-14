import React from "react";
import commingsoon from "../static/icons/coming-soon.png";
import "../static/css/Bienetre.css";

const Bienetre = () => {
  return (
    <div className="bienetre-container">
      <img src={commingsoon} className="commingsoon" alt="commingsoon"></img>
    </div>
  );
};

export default Bienetre;
