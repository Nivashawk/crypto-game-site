import './App.css';
import Home from './Pages/home/home'
import Game from './Pages/game/game'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/game" exact component={Game} />
      </Switch>
    </Router>
  );
}

export default App;
