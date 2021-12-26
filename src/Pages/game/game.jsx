import { Fragment } from "react";
import "./game.css";
import { useEffect, useState, useRef } from 'react'
import './../../Components/inputslot1/input.css'
import { useForm } from 'react-hook-form';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useLottie } from "lottie-react";
import particles from "./../../lotties/57356-particle-effect-electric.json";

// importing reusable components
import Valuebox from "../../Components/value-box/value-box";
import Percentage from "../../Components/percentage/percentage";
import BtcScore from "../../Components/btc-score/btc-score";
import Wallet from "../../Components/wallet/wallet";
import Startvalue from "../../Components/start-value/startvalue";
import Stopvalue from "../../Components/stop-value/stopvalue";
import Input from "../../Components/inputslot1/input";
import Slot1 from "../../Components/timer/slot1";
import Slot2 from "../../Components/timer/slot2";
import Countdown1 from "../../Components/countdown-timer/countdowntimer1";
import Countdown2 from "../../Components/countdown-timer/countdowntimer2";

function Game() {

  let interval = useRef();

  // winner cup flag
  const [cup1_flag, setcup1_flag] = useState(false);
  const [cup2_flag, setcup2_flag] = useState(false);
  const [cup3_flag, setcup3_flag] = useState(false);
  const [cup4_flag, setcup4_flag] = useState(false);
  const [cup5_flag, setcup5_flag] = useState(false);
  const [cup6_flag, setcup6_flag] = useState(false);
  const [cup7_flag, setcup7_flag] = useState(false);
  const [cup8_flag, setcup8_flag] = useState(false);
  const [cup9_flag, setcup9_flag] = useState(false);
  const [cup10_flag, setcup10_flag] = useState(false);
  const [cup11_flag, setcup11_flag] = useState(false);
  const [cup12_flag, setcup12_flag] = useState(false);
  const [cup13_flag, setcup13_flag] = useState(false);
  const [cup14_flag, setcup14_flag] = useState(false);

  
  const startTimer = () => {
    interval = setInterval(() => {
      //slot1 winner
      const slot1startvalue = 4
      const slot1endvalue = 1.5

      //slot2 winner
      const slot2startvalue = 1
      const slot2endvalue = 1

      //formula change it accordingly
      var winner_percentage_slot1 = ((slot1startvalue - slot1endvalue))
      var winner_percentage_slot2 = ((slot2startvalue - slot2endvalue))
  
      // slot 1 winner cup conditions
      if (winner_percentage_slot1 > 0 && winner_percentage_slot1 < 1)
    {
      setcup1_flag(true)
    }
    else if (winner_percentage_slot1 >= 1 && winner_percentage_slot1 < 2)
    {
      setcup2_flag(true)
    }
    else if (winner_percentage_slot1 >= 2)
    {
      setcup3_flag(true)
    }
    else if (winner_percentage_slot1 === 0)
    {
      setcup4_flag(true)
    }
    else if (winner_percentage_slot1 < 0 && winner_percentage_slot1 > -1)
    {
      setcup5_flag(true)
    }
    else if (winner_percentage_slot1 <= -1 && winner_percentage_slot1 > -2)
    {
      setcup6_flag(true)
    }
    else if (winner_percentage_slot1 <= -2)
    {
      setcup7_flag(true)
    }

    // slot 2 winner cup conditions
    if (winner_percentage_slot2 > 0 && winner_percentage_slot2 < 1)
    {
      setcup8_flag(true)
    }
    else if (winner_percentage_slot2 >= 1 && winner_percentage_slot2 < 2)
    {
      setcup9_flag(true)
    }
    else if (winner_percentage_slot2 >= 2)
    {
      setcup10_flag(true)
    }
    else if (winner_percentage_slot2 === 0)
    {
      setcup11_flag(true)
    }
    else if (winner_percentage_slot2 < 0 && winner_percentage_slot2 > -1)
    {
      setcup12_flag(true)
    }
    else if (winner_percentage_slot2 <= -1 && winner_percentage_slot2 > -2)
    {
      setcup13_flag(true)
    }
    else if (winner_percentage_slot2 <= -2)
    {
      setcup14_flag(true)
    }   
      }, 10000);
  };

  

  

  // handling form input values here
  const { register, handleSubmit } = useForm();
    const onSubmit = async(data) => {
        console.log(data.value);
    }


  useEffect(() => {
    AOS.init({ duration: 2000 });
    startTimer();
    return () => {
      clearInterval(interval.cutrrent);
    };
})

  // BG lottie
  const BGLottie = () => {
    const options = {
      animationData: particles,
      loop: true,
      autoplay: true,
    };
    const { View } = useLottie(options);
    return View;
  };

  // data sharing values
  const [selectedinput, setselectedinput] = useState("00000");
  console.log(selectedinput);

  // design started here

  return (
    <Fragment>
      <body data-aos="zoom-out">
        <div className="lottie-arrow">
          <BGLottie />
        </div>
        <section className="game" >
        <BtcScore score="00000000" />
          <div className="game-header">
            <div className="diamond">
              <img
                className="diamond-img"
                src="/images/game/diamond.svg"
                alt=""
              />
            </div>
            <div className="walletPosition">
              <Wallet title="Claim"/>
              <div className = "instructions">000</div>
            </div>
          </div>

          <div className="game-header2">
            <Startvalue score="00000000" />
            <Slot1 />
            <Stopvalue score="00000000" />
          </div>

          <div className="main-container-wrap1">
            <div className="game-left1">
              <img className="plus-img" src="/images/game/plus.svg" alt="" />
            </div>
            <Countdown1 />
            <div className="game-right1">
              <img className="minus-img" src="/images/game/minus.svg" alt="" />
            </div>
          </div>

          {/* main percentage design starts here */}

          <div className="main-container-wrap">
            <div className="game-left">
              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="Less than 1%" />
                  { cup1_flag && <img src="/images/game/winner cup 7.svg" alt="" />}
                </div>
                <div className="percentage-container-down">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input id="name" type="text" className="form__field" placeholder="Enter Amount" {...register("value")} />
                  <input className="arrow-img" src="/images/game/left-arrow.svg" type="image" alt="submit" />
                </form>
                  <Valuebox value="000" title="Your Value" />
                  <Valuebox value="000" title="Total Value" />
                  <Valuebox value="000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="1% to 2%" />
                  { cup2_flag && <img src="/images/game/winner cup 7.svg" alt="" />}
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="000" title="Your Value" />
                  <Valuebox value="000" title="Total Value" />
                  <Valuebox value="000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="2% and above" />
                  { cup3_flag && <img src="/images/game/winner cup 7.svg" alt="" />}
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="000" title="Your Value" />
                  <Valuebox value="000" title="Total Value" />
                  <Valuebox value="000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="Equal to" />
                  { cup4_flag && <img src="/images/game/winner cup 7.svg" alt="" />}
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="000" title="Your Value" />
                  <Valuebox value="000" title="Total Value" />
                  <Valuebox value="000" title="Total Players" />
                </div>
              </div>
            </div>
            <div className="game-right">
              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="Less than 1%" />
                  { cup5_flag && <img src="/images/game/winner cup 7.svg" alt="" />}
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="000" title="Your Value" />
                  <Valuebox value="000" title="Total Value" />
                  <Valuebox value="000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="1% to 2%" />
                  { cup6_flag && <img src="/images/game/winner cup 7.svg" alt="" />}
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="000" title="Your Value" />
                  <Valuebox value="000" title="Total Value" />
                  <Valuebox value="000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="2% and above" />
                  { cup7_flag && <img src="/images/game/winner cup 7.svg" alt="" />}
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="000" title="Your Value" />
                  <Valuebox value="000" title="Total Value" />
                  <Valuebox value="000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-down">
                  <div className="total-amount">65765765675765</div>
                  <Wallet title="Total" />
                </div>
              </div>
            </div>
          </div>

          {/* main percentage design ends here */}
        </section>

        {/* bottom slot design starts here */}
        <section className="game">
          <div className="game-header2">
            <Startvalue score="72847234" />
            <Slot2 />
            <Stopvalue score="1231233" />
          </div>

          <div className="main-container-wrap1">
            <div className="game-left1">
              <img className="plus-img" src="/images/game/plus.svg" alt="" />
            </div>
            <Countdown2 />
            <div className="game-right1">
              <img className="minus-img" src="/images/game/minus.svg" alt="" />
            </div>
          </div>

          {/* main percentage design starts here */}

          <div className="main-container-wrap">
            <div className="game-left">
              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="Less than 1%" />
                  { cup8_flag && <img src="/images/game/winner cup 7.svg" alt="" />}
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="000" title="Your Value" />
                  <Valuebox value="000" title="Total Value" />
                  <Valuebox value="000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="1% to 2%" />
                  { cup9_flag && <img src="/images/game/winner cup 7.svg" alt="" />}
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="000" title="Your Value" />
                  <Valuebox value="000" title="Total Value" />
                  <Valuebox value="000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="2% and above" />
                  { cup10_flag && <img src="/images/game/winner cup 7.svg" alt="" />}
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="000" title="Your Value" />
                  <Valuebox value="000" title="Total Value" />
                  <Valuebox value="000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="Equal to" />
                  { cup11_flag && <img src="/images/game/winner cup 7.svg" alt="" />}
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="000" title="Your Value" />
                  <Valuebox value="000" title="Total Value" />
                  <Valuebox value="000" title="Total Players" />
                </div>
              </div>
            </div>
            <div className="game-right">
              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="Less than 1%" />
                  { cup12_flag && <img src="/images/game/winner cup 7.svg" alt="" />}
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="000" title="Your Value" />
                  <Valuebox value="000" title="Total Value" />
                  <Valuebox value="000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="1% to 2%" />
                  { cup13_flag && <img src="/images/game/winner cup 7.svg" alt="" />}
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="000" title="Your Value" />
                  <Valuebox value="000" title="Total Value" />
                  <Valuebox value="000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="2% and above" />
                  { cup14_flag && <img src="/images/game/winner cup 7.svg" alt="" />}
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="000" title="Your Value" />
                  <Valuebox value="000" title="Total Value" />
                  <Valuebox value="000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-down">
                  <div className="total-amount">0000</div>
                  <Wallet title="Total" />
                </div>
              </div>
            </div>
          </div>

          {/* main percentage design ends here */}
        </section>
      </body>
    </Fragment>
  );
}

export default Game;
