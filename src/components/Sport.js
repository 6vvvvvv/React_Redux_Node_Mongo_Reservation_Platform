import React, { useEffect, useState } from "react";
import Activitycard from "./Activitycard";
import "../static/css/Sport.css";
import { connect } from "react-redux";

const Sport = (props) => {
  const Sportitem = props.sportInfo;
  const [sportdidMount, setSportDidMount] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setSportDidMount(true);
    }, 0);
  }, []);

  return (
    <div className={`sport-container ${sportdidMount && "visible"}`}>
      {Sportitem.map((item, index) => (
        <Activitycard
          title={item.title}
          description={item.description}
          img={item.img}
          date={item.date}
          link={item.link}
          key={index}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sportInfo: state.actReducer.sport,
});

export default connect(mapStateToProps, null)(Sport);
