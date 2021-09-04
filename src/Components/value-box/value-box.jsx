import './value-box.css';


function Valuebox(props) {
    // design started here
    return (
        <div className="value-box-wrap">
            <div className="value-box">
                {props.value}
            </div>
            <div className="value-box-title">{props.title}</div>
        </div>
    );
}

export default Valuebox;