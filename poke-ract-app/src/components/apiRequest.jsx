import React from 'react'
import axios from 'axios';
import getRandomNum from './Utilities/RandomNum'

class Pokemon extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            randomNum: 1,
            pokeInfo: {}
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
    // getMoves = async (pokeInfo) => {
    //     //getting the moves of the pokemon generated
    //     console.log(pokeInfo.moves);
    //     let randomIndex = await getRandomNum(pokeInfo.moves.length, 0)
    //     console.log(randomIndex);

    //     let url = pokeInfo.moves[`${randomIndex}`].move.url;
    //     console.log(url);
    //     let movesInfo = await axios.get(url)
    //     return movesInfo.data;
    // }

    // getRandomNum = () => (Math.floor((Math.random() * 810) + 1))

    handleNewPokemon = async (e) => {
        let randomNum = this.state.randomNum
        await this.generatePoke(randomNum)

    }

    render() {

        console.log(this.state);

        return (<>
            <p>hello</p>
            <button onClick={this.handleNewPokemon}>Summon Pokemon</button>
        </>)
    }
}

export default Pokemon