import "./countdowntimer.css";
import { useState, useEffect, useRef } from "react";

function Countdown1() {
  const [timeMinutes, setTimerMinutes] = useState("00");
  const [timeSeconds, setTimerSeconds] = useState("00");
  
  let interval = useRef();
  
  const first60mins = () => {
    const CountdownTime60 = 60 * 60000;
    const Countsec = 60 * 1000;

    interval = setInterval(() => {
      // countdown for 60 mins
      const nowmin = new Date().getMinutes() * 60000;
      const nowsec = new Date().getSeconds() * 1000;
      var distanceofminute = CountdownTime60 - nowmin;
      var distanceofseconds = Countsec - nowsec;
      const first60minutes = Math.floor(
        (distanceofminute % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distanceofseconds % (1000 * 60)) / 1000);


      if (distanceofminute < 0) {
        clearInterval(interval.current);
      } else {
        setTimerMinutes(first60minutes);
        setTimerSeconds(seconds);
        }
    }, 1000);
  };


const second30minutes = () => {
    const CountdownTime30 = 60 * 60000;
    const Countsec = 60 * 1000;
    const nowmin = (new Date().getMinutes() - 1) * 60000;
    const nowsec = new Date().getSeconds() * 1000;
    var distanceofminute = CountdownTime30 - nowmin;
    var distanceofseconds = Countsec - nowsec;
    const second30minutes = Math.floor(
      ((distanceofminute % (1000 * 60 * 60)) / (1000 * 60)) -1
      );
    const seconds = Math.floor((distanceofseconds % (1000 * 60)) / 1000);



    interval = setInterval(() => {
      // countdown for 30 mins
      const nowmin = (new Date().getMinutes() - 1) * 60000;
      const nowsec = new Date().getSeconds() * 1000;
      var distanceofminute = CountdownTime30 - nowmin;
      var distanceofseconds = Countsec - nowsec;
      const second30minutes = Math.floor(
        ((distanceofminute % (1000 * 60 * 60)) / (1000 * 60)) -1
      );
    //   console.log(second30minutes);
      const seconds = Math.floor((distanceofseconds % (1000 * 60)) / 1000);

      if (distanceofminute < 0) {
        clearInterval(interval.current);
      } else {
        setTimerMinutes(second30minutes);
        setTimerSeconds(seconds);
        }
    }, 1000);
  };


  const timer = () => {
    interval = setInterval(() => {
    var date = new Date(Date.now()).toLocaleTimeString();
    console.log(date);

      // 00:00 TO 02:00
      if (date >= "00:00:00" && date <= "01:00:00") {
        first60mins()
      } else if (date >= "01:00:00" && date <= "01:30:00") {
        setTimerMinutes("00");
        setTimerSeconds("00");
      } else if (date >= "01:30:00" && date <= "02:00:00") {
        second30minutes()
      } 
      
      // 02:00 TO 04:00
      else if (date >= "02:00:00" && date <= "03:00:00") {
        first60mins()
      } else if (date >= "03:00:00" && date <= "03:30:00") {
        setTimerMinutes("00");
        setTimerSeconds("00");
      } else if (date >= "03:30:00" && date <= "04:00:00") {
        second30minutes()
      }
      
      // 04:00 TO 06:00
      else if (date >= "04:00:00" && date <= "05:00:00") {
        first60mins()
      } else if (date >= "05:00:00" && date <= "05:30:00") {
        setTimerMinutes("00");
        setTimerSeconds("00");
      } else if (date >= "05:30:00" && date <= "06:00:00") {
        second30minutes()
      }
      
      // 06:00 TO 08:00
      else if (date >= "06:00:00" && date <= "07:00:00") {
        first60mins()
      } else if (date >= "07:00:00" && date <= "07:30:00") {
        setTimerMinutes("00");
        setTimerSeconds("00");
      } else if (date >= "07:30:00" && date <= "08:00:00") {
        second30minutes()
      }

      // 08:00 TO 10:00
      else if (date >= "08:00:00" && date <= "09:00:00") {
        first60mins()
      } else if (date >= "09:00:00" && date <= "09:30:00") {
        setTimerMinutes("00");
        setTimerSeconds("00");
      } else if (date >= "09:30:00" && date <= "10:00:00") {
        second30minutes()
      } 

      // 10:00 TO 12:00
      else if (date >= "10:00:00" && date <= "11:00:00") {
        first60mins()
      } else if (date >= "11:00:00" && date <= "11:30:00") {
        setTimerMinutes("00");
        setTimerSeconds("00");
      } else if (date >= "11:30:00" && date <= "12:00:00") {
        second30minutes()
      } 

      // 12:00 TO 14:00
      else if (date >= "12:00:00" && date <= "13:00:00") {
        first60mins()
      } else if (date >= "13:00:00" && date <= "13:30:00") {
        setTimerMinutes("00");
        setTimerSeconds("00");
      } else if (date >= "13:30:00" && date <= "14:00:00") {
        second30minutes()
      }

      // 14:00 TO 16:00
      else if (date >= "14:00:00" && date <= "15:00:00") {
        first60mins()
      } else if (date >= "15:00:00" && date <= "15:30:00") {
        setTimerMinutes("00");
        setTimerSeconds("00");
      } else if (date >= "15:30:00" && date <= "16:00:00") {
        second30minutes()
      }

      // 16:00 TO 18:00
      else if (date >= "16:00:00" && date <= "17:00:00") {
        first60mins()
      } else if (date >= "17:00:00" && date <= "17:30:00") {
        setTimerMinutes("00");
        setTimerSeconds("00");
      } else if (date >= "17:30:00" && date <= "18:00:00") {
        second30minutes()
      }

      // 18:00 TO 20:00
      else if (date >= "18:00:00" && date <= "19:00:00") {
        first60mins()
      } else if (date >= "19:00:00" && date <= "19:30:00") {
        setTimerMinutes("00");
        setTimerSeconds("00");
      } else if (date >= "19:30:00" && date <= "20:00:00") {
        second30minutes()
      }

      // 20:00 TO 22:00
      else if (date >= "20:00:00" && date <= "21:00:00") {
        first60mins()
      } else if (date >= "21:00:00" && date <= "21:30:00") {
        setTimerMinutes("00");
        setTimerSeconds("00");
      } else if (date >= "21:30:00" && date <= "22:00:00") {
        second30minutes()
      }

      // 22:00 TO 24:00
      else if (date >= "22:00:00" && date <= "23:00:00") {
        first60mins()
      } else if (date >= "23:00:00" && date <= "23:30:00") {
        setTimerMinutes("00");
        setTimerSeconds("00");
      } else if (date >= "23:30:00" && date <= "24:00:00") {
        second30minutes()
      }

    }, 1000);
  };


  

  useEffect(() => {
    timer();
    return () => {
      clearInterval(interval.current);
    };
  });

  // design started here
  return (
    <div className="Countdown-box">
      <span>{timeMinutes}</span>
      <span>mins</span>
      <span>{timeSeconds}</span>
      <span>secs</span>
      {/* {props.Countdown} */}
    </div>
  );
}


export default Countdown1;
