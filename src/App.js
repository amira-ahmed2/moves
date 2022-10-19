import './App.css';
import Header from './header/Header';
import Moves from './moves/moves';
import Move from './moves/move';

import { Register } from './register/register';
import { Login } from './login/login';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return <>
  <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={Moves} />
          <Route path="/moves" exact component={Moves} />
          <Route path="/login" exact component={Login} />
          <Route path="/Register" exact component={Register} />
      
          <Route path="/move/:id" exact component={Move}/>
        </Switch>
      </Router>
  </>
  
  
}

export default App;
