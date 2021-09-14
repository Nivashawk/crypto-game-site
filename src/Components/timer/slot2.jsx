import "./timer.css";
import { useState, useEffect, useRef } from "react";

function Slot2() {
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
            setslotTime("01:00 To 02:00")
          } else if (date >= "02:00:00" && date <= "04:00:00") {
            setslotTime("03:00 To 04:00")
          } else if (date >= "04:00:00" && date <= "06:00:00") {
            setslotTime("05:00 To 06:00")
          } else if (date >= "06:00:00" && date <= "08:00:00") {
            setslotTime("07:00 To 08:00")
          } else if (date >= "08:00:00" && date <= "10:00:00") {
            setslotTime("09:00 To 10:00")
          } else if (date >= "10:00:00" && date <= "12:00:00") {
            setslotTime("11:00 To 12:00")
          } else if (date >= "12:00:00" && date <= "14:00:00") {
            setslotTime("13:00 To 14:00")
          } else if (date >= "14:00:00" && date <= "16:00:00") {
            setslotTime("15:00 To 16:00")
          } else if (date >= "16:00:00" && date <= "18:00:00") {
            setslotTime("17:00 To 18:00")
          } else if (date >= "18:00:00" && date <= "20:00:00") {
            setslotTime("19:00 To 20:00")
          } else if (date >= "20:00:00" && date <= "22:00:00") {
            setslotTime("21:00 To 22:00")
          } else if (date >= "22:00:00" && date <= "24:00:00") {
            setslotTime("23:00 To 24:00")
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
 
    return <div className="wrap">
                <div className="timer-box">{slotTime}</div>
                <div className="slot_title">Time Slot</div>;
            </div>
  }

export default Slot2;
