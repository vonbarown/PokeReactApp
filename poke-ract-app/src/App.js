import React from 'react';
import './App.css';
import Pokemon from './components/apiRequest';
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    console.log('hello moto');

  }

  generatePoke = async () => {
    let randNum = 4
    try {
      //getting the pokemon from pokemon end point with random number
      const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randNum}`)
      console.log(poke.data.name);

      // creatingCard(poke.data)
      return poke.dat
    } catch (error) {
      console.log(error);

    }
  }

  render() {
    return (
      <div className="App">
        <Pokemon generatePoke={this.generatePoke} />
      </div>
    );
  }
}

export default App;
