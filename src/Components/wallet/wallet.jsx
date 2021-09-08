import './wallet.css';


function Wallet(props) {
    // design started here
    return (
        <div className="Wallet-box-wrap">
            <img className="wallet-img" src="/images/game/wallet.svg" alt="" />
            <div className="wallet-title">
                {props.title}
            </div>
            
        </div>
    );
}

export default Wallet;