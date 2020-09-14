import React from "react";
import "../static/css/Profilecard.css";

const Profilecard = (props) => {
  return (
    <div>
      <div className="prof-container hoverable  ">
        <div className="box ">
          <img className="img-box" src={props.img} alt="profile-img" />
          <h2 className="name">{props.name}</h2>
          <h3 className="des">{props.designation}</h3>
        </div>
      </div>
    </div>
  );
};

export default Profilecard;
