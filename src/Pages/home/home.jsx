import './home.css';
import { useHistory } from 'react-router-dom';



function Home() {

    // Routing done here

    const history = useHistory();
    const route_to_game = () => history.push('/game');

    // design started here
    return (
        <section className="home">
            <div className="homeimg-container">
                <img className="main-img" src="/images/home/home1.png" alt="" />
                <img className="abstract" src="/images/home/abstract.png" alt="" />
            </div>
            <button onClick={route_to_game}>PLAY NOW</button>
        </section>
    );
}

export default Home;