import React from 'react'
import axios from 'axios'

class Pokemon extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            randomNum: ''
        }
    }



    componentDidUpdate() {
        this.handleNewPokemon()
    }

    generatePoke = async (randNum) => {
        console.log('hit');

        let url = `https://pokeapi.co/api/v2/pokemon/${randNum}`
        try {
            //getting the pokemon from pokemon end point with random number
            const { data } = await axios.get(url)
            console.log(data);

            // creatingCard(poke.data)
        } catch (error) {
            console.log(error);

        }
    }
    getMoves = async (pokeInfo) => {
        //getting the moves of the pokemon generated
        console.log(pokeInfo.moves);
        let randomIndex = await this.getRandomNum(pokeInfo.moves.length, 0)
        console.log(randomIndex);

        let url = pokeInfo.moves[`${randomIndex}`].move.url;
        console.log(url);
        let movesInfo = await axios.get(url)
        return movesInfo.data;
    }

    getRandomNum = () => {
        this.setState({
            randomNum: Math.floor((Math.random() * 810) + 1)
        })
    };

    handleNewPokemon = async (e) => {
        let randomNum = this.state.randomNum
        await this.generatePoke(randomNum)
    }

    render() {

        console.log(this.state);

        return (<>
            <p>hello</p>
            <button onClick={this.getRandomNum}>Summon Pokemon</button>
        </>)
    }
}

export default Pokemon