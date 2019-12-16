import React from 'react';
import './App.css';
import Pokemon from './components/apiRequest';

class App extends React.Component {
  constructor() {
    super()
    console.log('hello moto');
    // this.state = {
    //   randomNum: ''
    // }


  }



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
        <Pokemon />
      </div>
    );
  }
}

export default App;
