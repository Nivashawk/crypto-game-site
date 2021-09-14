import { Fragment } from "react";
import "./game.css";
import { useState } from "react";
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

  // design started here

  return (
    <Fragment>
      <body>
        <div className="lottie-arrow">
          <BGLottie />
        </div>
        <section className="game">
        <BtcScore score="00000000" />
          <div className="game-header">
            <div className="diamond">
              <img
                className="diamond-img"
                src="/images/game/diamond.svg"
                alt=""
              />
            </div>
            <div className = "instructions">INSTRUCTIONS</div>
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
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="00000" title="Your Value" />
                  <Valuebox value="00000" title="Total Value" />
                  <Valuebox value="00000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="1% to 2%" />
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="00000" title="Your Value" />
                  <Valuebox value="00000" title="Total Value" />
                  <Valuebox value="00000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="2% and above" />
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="00000" title="Your Value" />
                  <Valuebox value="00000" title="Total Value" />
                  <Valuebox value="00000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="Equal to" />
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="00000" title="Your Value" />
                  <Valuebox value="00000" title="Total Value" />
                  <Valuebox value="00000" title="Total Players" />
                </div>
              </div>
            </div>
            <div className="game-right">
              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="Less than 1%" />
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="00000" title="Your Value" />
                  <Valuebox value="00000" title="Total Value" />
                  <Valuebox value="00000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="1% to 2%" />
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="00000" title="Your Value" />
                  <Valuebox value="00000" title="Total Value" />
                  <Valuebox value="00000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="2% and above" />
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="00000" title="Your Value" />
                  <Valuebox value="00000" title="Total Value" />
                  <Valuebox value="00000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-down">
                  <div className="total-amount">65765765675765</div>
                  <Wallet title="claim" />
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
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="00000" title="Your Value" />
                  <Valuebox value="00000" title="Total Value" />
                  <Valuebox value="00000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="1% to 2%" />
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="00000" title="Your Value" />
                  <Valuebox value="00000" title="Total Value" />
                  <Valuebox value="00000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="2% and above" />
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="00000" title="Your Value" />
                  <Valuebox value="00000" title="Total Value" />
                  <Valuebox value="00000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="Equal to" />
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="00000" title="Your Value" />
                  <Valuebox value="00000" title="Total Value" />
                  <Valuebox value="00000" title="Total Players" />
                </div>
              </div>
            </div>
            <div className="game-right">
              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="Less than 1%" />
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="00000" title="Your Value" />
                  <Valuebox value="00000" title="Total Value" />
                  <Valuebox value="00000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="1% to 2%" />
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="00000" title="Your Value" />
                  <Valuebox value="00000" title="Total Value" />
                  <Valuebox value="00000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-up">
                  <Percentage percentage="2% and above" />
                </div>
                <div className="percentage-container-down">
                  <Input setselectedinput={setselectedinput} />
                  <Valuebox value="00000" title="Your Value" />
                  <Valuebox value="00000" title="Total Value" />
                  <Valuebox value="00000" title="Total Players" />
                </div>
              </div>

              <div className="overall-percentage-container">
                <div className="percentage-container-down">
                  <div className="total-amount">65765765675765</div>
                  <Wallet title="claim" />
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
