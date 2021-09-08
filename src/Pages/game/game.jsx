import { Fragment } from 'react';
import './game.css';
import { useState } from 'react';

import particlesConfig from './particle-config'


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
import Slot1 from '../../Components/timer/slot1'
import Slot2 from '../../Components/timer/slot2'


function Game() {

    // data sharing for values
    const [selectedPos_lessthan_1, setselectedPos_lessthan_1] = useState()
    const [selectedPos_1_to_2, setselectedPos_1_to_2] = useState()
    const [selectedPos_2andabove, setselectedPos_2andabove] = useState()
    const [selectedPrice4, setSelectedPrice4] = useState()
    const [selectedNeg_lessthan_1, setselectedNeg_lessthan_1] = useState()
    const [selectedNeg_1_to_2, setselectedNeg_1_to_2] = useState()
    const [selectedNeg_2andabove, setselectedNeg_2andabove] = useState()

    // design started here

    return (
        <Fragment>
            
            <section className="game">

<div className="game-header">
    <div className="diamond">
        <img className="diamond-img" src="/images/game/diamond.svg" alt="" />
    </div>
    <BtcScore score="23435342534"/>
    <Wallet title="Withdraw amount"/>
</div>

<div className="game-header2">
    <Startvalue score="72847234"/>
    <Slot1/>
    <Stopvalue score = "1231233" />
</div>

<div className="main-container-wrap1">
    <div className="game-left1">
        <img className="plus-img" src="/images/game/plus.svg" alt="" />
    </div>
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
                <PositiveLessThan1 setselectedPos_lessthan_1={setselectedPos_lessthan_1}/>
                <Valuebox value={selectedPos_lessthan_1} title="Your Value"/>
                <Valuebox value="23123" title="Total Value"/>
                <Valuebox value="23123" title="Total Players"/>
            </div>
        </div>

        <div className="overall-percentage-container">
            <div className="percentage-container-up">
                <Percentage percentage="1% to 2%" />
            </div>
            <div className="percentage-container-down">
                <Positive1To2Input setselectedPos_1_to_2={setselectedPos_1_to_2}/>
                <Valuebox value={selectedPos_1_to_2} title="Your Value"/>
                <Valuebox value="23123" title="Total Value"/>
                <Valuebox value="23123" title="Total Players"/>
            </div>
        </div>

        <div className="overall-percentage-container">
            <div className="percentage-container-up">
                <Percentage percentage="2% and above" />
            </div>
            <div className="percentage-container-down">
                <Positive2AndAbove setselectedPos_2andabove={setselectedPos_2andabove}/>
                <Valuebox value={selectedPos_2andabove} title="Your Value"/>
                <Valuebox value="23123" title="Total Value"/>
                <Valuebox value="23123" title="Total Players"/>
            </div>
        </div>

        <div className="overall-percentage-container">
            <div className="percentage-container-up">
                <Percentage percentage="Equal to" />
            </div>
            <div className="percentage-container-down">
                <Positive2AndAbove setSelectedPrice4={setSelectedPrice4}/>
                <Valuebox value={selectedPrice4} title="Your Value"/>
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
                <NegativeLessThan1 setselectedNeg_lessthan_1={setselectedNeg_lessthan_1}/>
                <Valuebox value={selectedNeg_lessthan_1} title="Your Value"/>
                <Valuebox value="23123" title="Total Value"/>
                <Valuebox value="23123" title="Total Players"/>
            </div>
        </div>

        <div className="overall-percentage-container">
            <div className="percentage-container-up">
                <Percentage percentage="1% to 2%" />
            </div>
            <div className="percentage-container-down">
                <Negative1To2 setselectedNeg_1_to_2={setselectedNeg_1_to_2}/>
                <Valuebox value={selectedNeg_1_to_2} title="Your Value"/>
                <Valuebox value="23123" title="Total Value"/>
                <Valuebox value="23123" title="Total Players"/>
            </div>
        </div>

        <div className="overall-percentage-container">
            <div className="percentage-container-up">
                <Percentage percentage="2% and above" />
            </div>
            <div className="percentage-container-down">
                <Negative2AndAbove setselectedNeg_2andabove={setselectedNeg_2andabove}/>
                <Valuebox value={selectedNeg_2andabove} title="Your Value"/>
                <Valuebox value="23123" title="Total Value"/>
                <Valuebox value="23123" title="Total Players"/>
            </div>
        </div>

        <div className="overall-percentage-container">
        <div className="percentage-container-down">
            <div className="total-amount">
                65765765675765
            </div>
            <Wallet title="Cailm amount"/>
        </div>
    </div>

    </div>
</div>

{/* main percentage design ends here */}

</section>

            
  



            <section className="game">
                
                <div className="game-header2">
                    <Startvalue score="72847234"/>
                    <Slot2/>
                    <Stopvalue score = "1231233" />
                </div>

                <div className="main-container-wrap1">
                    <div className="game-left1">
                        <img className="plus-img" src="/images/game/plus.svg" alt="" />
                    </div>
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
                        <div className="percentage-container-down">
                            <div className="total-amount">
                                65765765675765
                            </div>
                            <Wallet title="Cailm amount"/>
                        </div>
                    </div>

                    </div>
                </div>

                {/* main percentage design ends here */}

            </section>
        </Fragment>
    );
}

export default Game;