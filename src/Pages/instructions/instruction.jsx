import "./instruction.css";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
// import { useLottie } from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css";
// import particles from "./../../lotties/57356-particle-effect-electric.json";

function Instruction() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  // BG lottie
  // const BGLottie = () => {
  //   const options = {
  //     animationData: particles,
  //     loop: true,
  //     autoplay: true,
  //   };
  //   const { View } = useLottie(options);
  //   return View;
  // };

  
  // Routing done here

  const history = useHistory();
  const route_to_game = () => history.push("/game");

  // design started here
  return (
      <div className = "body">
          <section className="home1">
        
        <div className="homeimg-container1" data-aos="zoom-out">
          {/* <div className="lottie-arrow">
            <BGLottie />
          </div> */}
          <div className="left1" data-aos="fade-in">
            <div className="leftheading1">INSTRUCTIONS</div>
            <p>1. This a complete Decentralized application.</p>
            <p>2. You need to predict the price of Bitcoin within that hour.</p>
            <p>
              3. There are two slots running, one hour each (we follow universal
              time).
            </p>
            <p>
              4. If for eg. first time slot is 9-10, the start value of the
              bitcoin will be recorded at 9 and the end value at 10; players will
              be allowed to deposit bnb from 8.30 to 9.30 from 9.30 to 10 no
              transaction will be made; at 10 the game will be over and the
              winners will be announced; again the players will be allowed to
              deposit from 10.30 to 11.30 as the next time in this slot will be
              11-12. if they want to play for 10-11, then the second slot will be
              running from 9.30 to 10.30. player can either play any of the one
              slot alternatively, so that the game will be running 24 hrs.
            </p>
            <p>
              5. players need to predic the nearest percentage of bitcoin price
              within that hour, the total slot amount will be distributed to
              winners according to their percentage of their deposited amount
              amoung that particular winning percentage depositors. 5% of the
              winning amount goes to the newboson community wallet
            </p>
            <p>
              6.we use chain link data for bitcoin price as it gathers differesnt
              exchange prices (which avoids price manipulation) right now we are
              running the game is testnet, so connect smartchain testnet.
            </p>
          </div>
          <button onClick={route_to_game}>START GAME</button>
        </div>
      </section>
          
      </div>
    
  );
}

export default Instruction;
