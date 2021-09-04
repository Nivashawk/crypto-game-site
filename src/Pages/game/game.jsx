import { Fragment } from 'react';
import './game.css';


// importing reusable components
import Valuebox from '../../Components/value-box/value-box'
import Percentage from '../../Components/percentage/percentage'
import BtcScore from '../../Components/btc-score/btc-score'
import Wallet from '../../Components/wallet/wallet'



function Game() {

    // design started here

    return (
        <Fragment>
            <section className="game">
                <div className="game-header">
                    <img src="/images/game/diamond.svg" alt="" />
                    <BtcScore score="23435342534"/>
                    <Wallet title="Withdraw amount"/>
                </div>
                <div className="main-container-wrap">
                    <div className="game-left">
                        <div className="overall-percentage-container">
                            <div className="percentage-container-up">
                                <Percentage percentage="Less than 1%" />
                            </div>
                            <div className="percentage-container-down">
                                <Valuebox value="23123" title="Your Value"/>
                                <Valuebox value="23123" title="Total Value"/>
                                <Valuebox value="23123" title="Total Players"/>
                            </div>
                        </div>
                    </div>
                    <div className="game-right"></div>
                </div>
                <BtcScore score="23435342534"/>
                <Valuebox value="23123" title="Your Value"/>
                <Percentage percentage="Less than 1%" />
                <Wallet title="Withdraw amount"/>
                
            </section>
        </Fragment>
    );
}

export default Game;