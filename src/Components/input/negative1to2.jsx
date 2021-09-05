import './input.css';
import { useForm } from 'react-hook-form';


function Negative1to2(props) {

    // Form data accessed here
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    // design started here
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input id="name" type="text" className="form__field" placeholder="Enter Amount" {...register("negative 1% to 2%")} />
            <input src="/images/game/left-arrow.svg" type="image" alt="submit" />
        </form>
    );
}

export default Negative1to2;