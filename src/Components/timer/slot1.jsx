import './timer.css';


function Slot1(props) {
    var slot_value = "23423";
    const current_time = new Date().toLocaleTimeString('en-GB', { hour: "numeric", minute: "numeric"});
    console.log(current_time);
    console.log(new Date("Jan 5, 2022 15:37:25").getTime());

    // should refactor it 
    if(current_time >= "00:00" && current_time <= "02:00" )
    {
        slot_value = "00:00 to 01:00"
    }
    else if(current_time >= "02:00" && current_time <= "04:00" )
    {
        slot_value = "02:00 to 03:00"
    }
    else if(current_time >= "04:00" && current_time <= "06:00" )
    {
        slot_value = "04:00 to 05:00"
    }
    else if(current_time >= "06:00" && current_time <= "08:00" )
    {
        slot_value = "06:00 to 07:00"
    }
    else if(current_time >= "10:00" && current_time <= "12:00" )
    {
        slot_value = "10:00 to 11:00"
    }
    else if(current_time >= "12:00" && current_time <= "14:00" )
    {
        slot_value = "12:00 to 13:00"
    }
    else if(current_time >= "14:00" && current_time <= "16:00" )
    {
        slot_value = "14:00 to 15:00"
    }
    else if(current_time >= "16:00" && current_time <= "18:00" )
    {
        slot_value = "16:00 to 17:00"
    }
    else if(current_time >= "18:00" && current_time <= "20:00" )
    {
        slot_value = "18:00 to 19:00"
    }
    else if(current_time >= "20:00" && current_time <= "22:00" )
    {
        slot_value = "20:00 to 21:00"
    }
    else if(current_time >= "22:00" && current_time <= "24:00" )
    {
        slot_value = "22:00 to 23:00"
    }

    // design started here
    return (
        <div className="timer-box">
            {slot_value}
        </div>
    );
}

export default Slot1;