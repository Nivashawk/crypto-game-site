import "./timer.css";
import { useState, useEffect, useRef } from "react";

function Slot1() {
  const [slotTime, setslotTime] = useState("00:00 to 00:00");

  let interval = useRef();

  // getTimeString = () => {
  //     const date = new Date(Date.now()).toLocaleTimeString();
  //     return date;
  //   }

  const startTimer = () => {
    interval = setInterval(() => {
      var date = new Date(Date.now()).toLocaleTimeString();
      console.log(date);
      if (date >= "00:00:00" && date <= "02:00:00") {
        setslotTime("00:00 To 01:00");
      } else if (date >= "02:00:00" && date <= "04:00:00") {
        setslotTime("02:00 To 03:00");
      } else if (date >= "04:00:00" && date <= "06:00:00") {
        setslotTime("04:00 To 05:00");
      } else if (date >= "06:00:00" && date <= "08:00:00") {
        setslotTime("06:00 To 07:00");
      } else if (date >= "08:00:00" && date <= "10:00:00") {
        setslotTime("08:00 To 09:00");
      } else if (date >= "10:00:00" && date <= "12:00:00") {
        setslotTime("10:00 To 11:00");
      } else if (date >= "12:00:00" && date <= "14:00:00") {
        setslotTime("12:00 To 13:00");
      } else if (date >= "14:00:00" && date <= "16:00:00") {
        setslotTime("14:00 To 15:00");
      } else if (date >= "16:00:00" && date <= "18:00:00") {
        setslotTime("16:00 To 17:00");
      } else if (date >= "18:00:00" && date <= "20:00:00") {
        setslotTime("18:00 To 19:00");
      } else if (date >= "20:00:00" && date <= "22:00:00") {
        setslotTime("20:00 To 21:00");
      } else if (date >= "22:00:00" && date <= "24:00:00") {
        setslotTime("22:00 To 23:00");
      }
    }, 10000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.cutrrent);
    };
  });

  // design started here

  return (
    <div className="wrap">
      <div className="timer-box">{slotTime}</div>
      <div className="slot_title">Time Slot</div>
    </div>
  );
}

export default Slot1;
