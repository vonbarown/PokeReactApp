import React from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './components/PageComponents/Home';
import Battle from './components/PageComponents/BattlePage'
class App extends React.Component {


  render() {

    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/pokemans/battle">Battle</Link>{" "}
        </nav>

        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/pokemans/battle' component={Battle}></Route>
        </Switch>

      </div>
    );
  }
}

export default App;
