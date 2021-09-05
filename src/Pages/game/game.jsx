import { Fragment } from 'react';
import './game.css';


// importing reusable components
import Valuebox from '../../Components/value-box/value-box'
import Percentage from '../../Components/percentage/percentage'
import BtcScore from '../../Components/btc-score/btc-score'
import Wallet from '../../Components/wallet/wallet'
import Startvalue from '../../Components/start-value/startvalue'
import Stopvalue from '../../Components/stop-value/stopvalue'
import PositiveLessThan1 from '../../Components/input/positivelessthan1'
import Positive1To2Input from '../../Components/input/positive1to2'
import Positive2AndAbove from '../../Components/input/positive2andabove'
import NegativeLessThan1 from '../../Components/input/negativelessthan1'
import Negative1To2 from '../../Components/input/negative1to2'
import Negative2AndAbove from '../../Components/input/negative2andabove'


function Game() {

    // design started here

    return (
        <Fragment>
            <section className="game">
                <div className="game-header">
                    <div className="diamond">
                        <img src="/images/game/diamond.svg" alt="" />
                    </div>
                    <BtcScore score="23435342534"/>
                    <Wallet title="Withdraw amount"/>
                </div>

                <div className="game-header2">
                    <Startvalue score="72847234"/>
                    <Stopvalue score = "1231233" />
                </div>

                <div className="main-container-wrap1">
                    <div className="game-left1">
                        <img src="/images/game/plus.svg" alt="" />
                    </div>
                    <div className="game-right1">
                        <img src="/images/game/minus.svg" alt="" />
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
                                <PositiveLessThan1/>
                                <Valuebox value="23123" title="Your Value"/>
                                <Valuebox value="23123" title="Total Value"/>
                                <Valuebox value="23123" title="Total Players"/>
                            </div>
                        </div>

                        <div className="overall-percentage-container">
                            <div className="percentage-container-up">
                                <Percentage percentage="1% to 2%" />
                            </div>
                            <div className="percentage-container-down">
                                <Positive1To2Input/>
                                <Valuebox value="23123" title="Your Value"/>
                                <Valuebox value="23123" title="Total Value"/>
                                <Valuebox value="23123" title="Total Players"/>
                            </div>
                        </div>

                        <div className="overall-percentage-container">
                            <div className="percentage-container-up">
                                <Percentage percentage="2% and above" />
                            </div>
                            <div className="percentage-container-down">
                                <Positive2AndAbove/>
                                <Valuebox value="23123" title="Your Value"/>
                                <Valuebox value="23123" title="Total Value"/>
                                <Valuebox value="23123" title="Total Players"/>
                            </div>
                        </div>

                        <div className="overall-percentage-container">
                            <div className="percentage-container-up">
                                <Percentage percentage="Equal to" />
                            </div>
                            <div className="percentage-container-down">
                                <Positive2AndAbove/>
                                <Valuebox value="23123" title="Your Value"/>
                                <Valuebox value="23123" title="Total Value"/>
                                <Valuebox value="23123" title="Total Players"/>
                            </div>
                        </div>

                    </div>
                    <div className="game-right">
                        <div className="overall-percentage-container">
                            <div className="percentage-container-up">
                                <Percentage percentage="Less than 1%" />
                            </div>
                            <div className="percentage-container-down">
                                <NegativeLessThan1/>
                                <Valuebox value="23123" title="Your Value"/>
                                <Valuebox value="23123" title="Total Value"/>
                                <Valuebox value="23123" title="Total Players"/>
                            </div>
                        </div>

                        <div className="overall-percentage-container">
                            <div className="percentage-container-up">
                                <Percentage percentage="1% to 2%" />
                            </div>
                            <div className="percentage-container-down">
                                <Negative1To2/>
                                <Valuebox value="23123" title="Your Value"/>
                                <Valuebox value="23123" title="Total Value"/>
                                <Valuebox value="23123" title="Total Players"/>
                            </div>
                        </div>

                        <div className="overall-percentage-container">
                            <div className="percentage-container-up">
                                <Percentage percentage="2% and above" />
                            </div>
                            <div className="percentage-container-down">
                                <Negative2AndAbove/>
                                <Valuebox value="23123" title="Your Value"/>
                                <Valuebox value="23123" title="Total Value"/>
                                <Valuebox value="23123" title="Total Players"/>
                            </div>
                        </div>

                        <div className="overall-percentage-container">
                            <div className="total-amount">
                                65765765675765

                            </div>
                            <Wallet title="Cailm amount"/>
                        </div>

                    </div>
                </div>

                {/* main percentage design ends here */}

            </section>
        </Fragment>
    );
}

export default Game;