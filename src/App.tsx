import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Inner from './Routes/Inner';
import Outer from './Routes/Outer';
import { SignUp } from './Components/SignUp/SignUp';
import { SignIn } from './Components/SignIn/SignIn';
import { Home } from './Components/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Outer path="/signup" exact component={ SignUp } />
        <Outer path="/signin" exact component={ SignIn } />
        <Inner path="/home" exact component={ Home } />
        <Inner path="/" exact component={ Home } />
      </Switch>
    </Router>
  );
}

export default App;
