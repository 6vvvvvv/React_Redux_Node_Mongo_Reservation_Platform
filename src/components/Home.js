import React, { useEffect, useState } from "react";
import homelogo from "../static/icons/Logo_SHAPY_VALIDE.png";
import "../static/css/Home.css";

const Home = () => {
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDidMount(true);
    }, 0);
  }, []);

  return (
 
    <div className={`home-page-fade-in ${didMount && "visible"}`}>
      <img src={homelogo} className="home-page-logo" alt="home-page-logo"></img>
    </div>
  );
};

export default Home;
