import './startvalue.css';
import classNames from 'classnames'



function Startvalue(props) {
    const btnClass = classNames("startvaluewarp" , "glowing")
    // design started here
    return (
        <div className={btnClass}>
            <div className="startvaluetitle ">
                Start Value
            </div>
            <div className="start-btc-box">
                <img className="images" src="/images/game/btc.svg" alt="" />
                BTC {props.score}
            </div>
        </div>
    );
}

export default Startvalue;