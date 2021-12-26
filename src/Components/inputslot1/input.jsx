import './input.css';
import { useForm } from 'react-hook-form';


function Input({setselectedinput}) {

    // Form data accessed here
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data.value);
        setselectedinput(data.value)
    }

    let formclass = ["form__field", "glowing"]
    formclass = formclass.join(' ')
    // design started here
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input id="name" type="text" className={formclass} placeholder="Enter Amount" {...register("value")} />
            <input className="arrow-img" src="/images/game/left-arrow.svg" type="image" alt="submit" />
        </form>
    );
}

export default Input;