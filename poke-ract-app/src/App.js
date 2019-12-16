import React from 'react';
import './App.css';
import Pokemon from './components/apiRequest';
// import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    console.log('hello moto');
    // this.state = {
    //   randomNum: ''
    // }


  }

  // componentDidMount() {
  //   this.generatePoke()
  // }

  // generatePoke = async (randNum) => {
  //   console.log('hit');

  //   let url = `https://pokeapi.co/api/v2/pokemon/${randNum}`
  //   try {
  //     //getting the pokemon from pokemon end point with random number
  //     const { data } = await axios.get(url)
  //     console.log(data);
  //     // creatingCard(poke.data)
  //   } catch (error) {
  //     console.log(error);

  //   }
  // }



  // getRandomNum = () => {
  //   this.setState({
  //     randomNum: Math.floor((Math.random() * 810) + 1)
  //   })
  // };

  render() {
    // console.log(this.state);

    // let randomNum = this.state.randomNum
    return (
      <div className="App">
        <Pokemon
        // generatePoke={this.generatePoke}
        />
      </div>
    );
  }
}

export default App;
