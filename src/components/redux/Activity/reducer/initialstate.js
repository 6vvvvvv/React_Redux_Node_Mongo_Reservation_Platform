export const initialstate = {
  activity: {
    sport: {
      jogging: {
        name: "Jogging",
        duration: "60 mins",
        tool: "None",
        paticipants: ["LINDA", "LAWRENCE", "KEN", "STEPHEN"],
        img: "https://s8.gifyu.com/images/Run_interval_head_cut.jpg",
      },
      swim: {
        name: "Swim",
        duration: "60 mins",
        tool: "Goggle, Suit",
        paticipants: ["STEPHEN", "LAWRENCE"],
        img: "https://s1.gifyu.com/images/swimdetail.jpg",
      },
      basketball: {
        name: "Basketball",
        duration: "60 mins",
        tool: "None",
        paticipants: ["KEN"],
        img: "https://s1.gifyu.com/images/basketballdetail.jpg",
      },
      football: {
        name: "Football",
        duration: "120 mins",
        tool: "Boots, Knee pads",
        paticipants: ["LINDA"],
        img: "https://s1.gifyu.com/images/footballdetail.jpg",
      },
    },
    medecinedouce: {},
    culture: {},
    conciergerie: {},
  },

  sport: [
    {
      id: 1,
      title: "Jogging",
      description:
        "Believe it or not, running is actually a great way to increase your overall level of health. Research shows that running can raise your levels of good cholesterol while also helping you increase lung function and use. In addition, running can also boost your immune system and lower your risk of developing blood clots.",
      img: "https://s8.gifyu.com/images/jogging.jpg",
      date: "Monday to Friday 17:00PM-18:00PM",
      link: "/detail/sport/jogging",
    },
    {
      id: 2,
      title: "Swim",
      description:
        "Swimming is an efficient way to burn calories. A 160-pound person burns approximately 423 calories an hour while swimming laps at a low or moderate pace. That same person may burn up to 715 calories an hour swimming at a more vigorous pace. A 200-pound person doing the same activities would burn between 528 and 892 calories an hour. A 240-pound person might burn between 632 and 1,068.",
      img: "https://s8.gifyu.com/images/swim.jpg",
      date: "Weekend 17:00PM-18:00PM",
      link: "/detail/sport/swim",
    },
    {
      id: 3,
      title: "Basketball",
      description:
        "The game of basketball revolves around the movement of the players on the court. The motions of running, jumping and rapid lateral cuts all can deliver the player a great deal of exercise where calories can be burnt. Although having calories is not necessarily bad for you, having too much and not burning enough can lead to weight gain and consequently, other health problems.",
      img: "https://s8.gifyu.com/images/basketball.jpg",
      date: "Weekend 9AM-10AM",
      link: "/detail/sport/basketball",
    },
    {
      id: 4,
      title: "Football",
      description:
        "This is probably one of the best benefits of playing Football. The average player runs about 8 to 11 kilometers in a full game. The constant walking, jogging and running help keep the player’s heart rate up, providing an excellent cardiovascular exercise. This constant movement helps players strengthen their hearts, resist plaque build-up in the coronary arteries, reduce their blood pressure and burn excess calories.",
      img: "https://s1.gifyu.com/images/football.png",
      date: "Sunday 9AM-11AM",
      link: "/detail/sport/football",
    },
  ],
  medecinedouce: [],
  culture: [],
  conciergerie: [],
};
