import './input.css';
import { useForm } from 'react-hook-form';


function NegativeLessThan1(props) {

    // Form data accessed here
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    // design started here
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input id="name" type="text" className="form__field" placeholder="Enter Amount" {...register("negative less than 1%")} />
            <input src="/images/game/left-arrow.svg" type="image" alt="submit" />
        </form>
    );
}

export default NegativeLessThan1;