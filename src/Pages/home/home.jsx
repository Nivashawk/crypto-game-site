import './home.css';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react'
import { useLottie } from "lottie-react";
// import particles from "./../../lotties/57356-particle-effect-electric.json";
import homeimg from "./../../lotties/60257-business-analytics.json";
import AOS from 'aos';
import "aos/dist/aos.css";

function Home() {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    })

    // lotties
    const BGLottie = () => {
        const options = {
          animationData: homeimg,
          loop: true,
          autoplay: true,
        };
        const { View } = useLottie(options);
        return View;
      };

      // const BG = () => {
      //   const options = {
      //     animationData: particles,
      //     loop: true,
      //     autoplay: true,
      //     innerHeight:100
      //   };
      //   const { View } = useLottie(options);
      //   return View;
      // };

    // Routing done here

    const history = useHistory();
    const route_to_game = () => history.push('/game');

    // design started here
    return (
        <section className="home">
            <div className="menu">
                <div className="nav">Home</div>
                <div className="nav">Games</div>
                <div className="nav">Instructions</div>
            </div>
            <div className="homeimg-container" data-aos="zoom-out">
                <div className="left" data-aos="fade-in">
                    <div className="leftheading">CRYPTO IS EVERYTHING</div>
                    At this crucial time, telling someone about Bitcoin is not financial advice by all factors. It is life advice.
                </div>
                <div className="right"><BGLottie /></div>
                <button onClick={route_to_game}>PLAY NOW</button>
            </div>
        </section>
    );
}

export default Home;