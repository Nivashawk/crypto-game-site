import './timer.css';


function Slot2(props) {
    var slot_value = "23423";
    const current_time = new Date().toLocaleTimeString('en-GB', { hour: "numeric", minute: "numeric"});
    console.log(current_time);
    console.log(new Date("Jan 5, 2022 15:37:25").getTime());

    // should refactor it 
    if(current_time >= "00:00" && current_time <= "02:00" )
    {
        slot_value = "01:00 to 02:00"
    }
    else if(current_time >= "02:00" && current_time <= "04:00" )
    {
        slot_value = "03:00 to 04:00"
    }
    else if(current_time >= "04:00" && current_time <= "06:00" )
    {
        slot_value = "05:00 to 06:00"
    }
    else if(current_time >= "06:00" && current_time <= "08:00" )
    {
        slot_value = "07:00 to 08:00"
    }
    else if(current_time >= "10:00" && current_time <= "12:00" )
    {
        slot_value = "11:00 to 12:00"
    }
    else if(current_time >= "12:00" && current_time <= "14:00" )
    {
        slot_value = "13:00 to 14:00"
    }
    else if(current_time >= "14:00" && current_time <= "16:00" )
    {
        slot_value = "15:00 to 16:00"
    }
    else if(current_time >= "16:00" && current_time <= "18:00" )
    {
        slot_value = "17:00 to 18:00"
    }
    else if(current_time >= "18:00" && current_time <= "20:00" )
    {
        slot_value = "19:00 to 20:00"
    }
    else if(current_time >= "20:00" && current_time <= "22:00" )
    {
        slot_value = "21:00 to 22:00"
    }
    else if(current_time >= "22:00" && current_time <= "24:00" )
    {
        slot_value = "23:00 to 24:00"
    }

    // design started here
    return (
        <div className="timer-box">
            {slot_value}
        </div>
    );
}

export default Slot2;