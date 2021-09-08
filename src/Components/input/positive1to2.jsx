import './input.css';
import { useForm } from 'react-hook-form';


function Positive1To2Input({setselectedPos_1_to_2}) {

    // Form data accessed here
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data.value);
        setselectedPos_1_to_2(data.value)
    }

    // design started here
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input id="name" type="text" className="form__field" placeholder="Enter Amount" {...register("value")} />
            <input className="arrow-img" src="/images/game/left-arrow.svg" type="image" alt="submit" />
        </form>
    );
}

export default Positive1To2Input;