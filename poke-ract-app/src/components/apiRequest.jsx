import React from 'react'
import axios from 'axios';
import getRandomNum from './Utilities/RandomNum'
import GetMoves from './getMoves'

class Pokemon extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            randomNum: getRandomNum(801, 1),
            pokeInfo: []
        }
    }

    componentDidMount() {
        this.handleNewPokemon()
    }

    generatePoke = async (randNum) => {
        console.log('hit');

        let url = `https://pokeapi.co/api/v2/pokemon/${randNum}`
        try {
            //getting the pokemon from pokemon end point with random number
            const { data } = await axios.get(url)
            console.log(data);
            this.setState({
                pokeInfo: data,
                randomNum: getRandomNum(801, 1)
            })
        } catch (error) {
            console.log(error);

        }
    }

    handleNewPokemon = async (e) => {
        let randomNum = this.state.randomNum
        await this.generatePoke(randomNum)
        // await this.generatePoke(randomNum)
    }

    render() {

        console.log(this.state);

        return (<>
            <p>hello</p>
            <button onClick={this.handleNewPokemon}>Summon Pokemon</button>
            <GetMoves pokeInfo={this.state.pokeInfo} />
        </>)
    }
}

export default Pokemon