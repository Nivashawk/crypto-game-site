import './startvalue.css';


function Startvalue(props) {
    // design started here
    return (
        <div className="startvaluewarp">
            <div className="startvaluetitle">
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