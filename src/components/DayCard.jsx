import React from "react";

function DayCard(props) {
  console.log("🚀 ~ file: DayCard.jsx:4 ~ DayCard ~ props", props);
  return (
    <div key={props.i} className="day-card">
      {props.day}
    </div>
  );
}

export default DayCard;
