import "./App.css";
import Home from "./Pages/home/home";
import Game from "./Pages/game/game";
import Instruction from "./Pages/instructions/instruction";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />{" "}
        <Route path="/game" exact component={Game} />{" "}
        <Route path="/instruction" exact component={Instruction} />{" "}
      </Switch>{" "}
    </Router>
  );
}

export default App;
