import React, { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import "../static/css/Widget.css";

const ShowWidget = () => {
  useEffect(() => {
    addResponseMessage("Welcome to our platform!");
  }, []);

  return (
    <div className="chat-container">
      <Widget title="Bien-Etre PLateforme" subtitle="Question? We discuss!" />
    </div>
  );
};

export default ShowWidget;
