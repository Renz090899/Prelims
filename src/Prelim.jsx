import React from "react";

function Prelim() {
  const time = new Date();
  const timeOfDay = time.getHours();

  console.log(timeOfDay);

  let timeDayText = "";
  let customStyle = { color: "red" };

  if (timeOfDay < 12) {
    timeDayText = "Good Morning!";
    customStyle = { color: "red" };
    customStyle.color = "red";
  } else if (timeOfDay < 18) {
    timeDayText = "Good Afternoon!";
    customStyle.color = "green";
  } else {
    timeDayText = "Good Night!";
    customStyle.color = "blue";
  }

  return <h1 style={customStyle}>{timeDayText} </h1>;
}
export default Prelim;
