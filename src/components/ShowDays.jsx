import React, { useState } from "react";
import DayCard from "./DayCard";
import "./ShowDays.css";
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function ShowDays() {
  const [weekDays, setWeekDays] = useState(daysOfWeek);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {weekDays.map((day, i) => (
        <DayCard day={day} i={i} />
      ))}
    </div>
  );
}

export default ShowDays;
