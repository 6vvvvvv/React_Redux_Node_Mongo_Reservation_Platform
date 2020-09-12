import React, { useEffect, useState } from "react";
import Activitycard from "./Activitycard";
import "../static/css/Sport.css";

const Sportitem = [
  {
    id: 1,
    title: "Jogging",
    description:
      "Believe it or not, running is actually a great way to increase your overall level of health. Research shows that running can raise your levels of good cholesterol while also helping you increase lung function and use. In addition, running can also boost your immune system and lower your risk of developing blood clots.",
    img: "https://s8.gifyu.com/images/jogging.jpg",
    date: "Monday to Friday 17:00PM-18:00PM",
  },
  {
    id: 2,
    title: "Swim",
    description: "Swimming is an efficient way to burn calories. A 160-pound person burns approximately 423 calories an hour while swimming laps at a low or moderate pace. That same person may burn up to 715 calories an hour swimming at a more vigorous pace. A 200-pound person doing the same activities would burn between 528 and 892 calories an hour. A 240-pound person might burn between 632 and 1,068.",
    img: "https://s8.gifyu.com/images/swim.jpg",
    date: "Weekend 17:00PM-18:00PM",
  },
  {
    id: 3,
    title: "Basketball",
    description: "The game of basketball revolves around the movement of the players on the court. The motions of running, jumping and rapid lateral cuts all can deliver the player a great deal of exercise where calories can be burnt. Although having calories is not necessarily bad for you, having too much and not burning enough can lead to weight gain and consequently, other health problems.",
    img: "https://s8.gifyu.com/images/basketball.jpg",
    date: "Weekend 9AM-10AM",
  },
  {
    id: 4,
    title: "Football",
    description: "This is probably one of the best benefits of playing Football. The average player runs about 8 to 11 kilometers in a full game. The constant walking, jogging and running help keep the player’s heart rate up, providing an excellent cardiovascular exercise. This constant movement helps players strengthen their hearts, resist plaque build-up in the coronary arteries, reduce their blood pressure and burn excess calories.",
    img: "https://s8.gifyu.com/images/football.jpg",
    date: "Sunday 9AM-11AM",
  },
];

const Sport = () => {
  const [sportdidMount, setSportDidMount] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setSportDidMount(true);
    }, 0);
  }, []);

  return (
    <div className={`sport-container ${sportdidMount && "visible"}`}>
      <Activitycard
        title={Sportitem[0].title}
        description={Sportitem[0].description}
        img={Sportitem[0].img}
        date={Sportitem[0].date}
      />
      <Activitycard
        title={Sportitem[1].title}
        description={Sportitem[1].description}
        img={Sportitem[1].img}
        date={Sportitem[1].date}
      />
      <Activitycard
        title={Sportitem[2].title}
        description={Sportitem[2].description}
        img={Sportitem[2].img}
        date={Sportitem[2].date}
      />
      <Activitycard
        title={Sportitem[3].title}
        description={Sportitem[3].description}
        img={Sportitem[3].img}
        date={Sportitem[3].date}
      />
    </div>
  );
};

export default Sport;
