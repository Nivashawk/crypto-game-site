import './btc-score.css';


function BtcScore(props) {
    // design started here
    return (
        <div className="btc-box">
            <img src="/images/game/btc.svg" alt="" />
            BTC {props.score}
        </div>
    );
}

export default BtcScore;