import React from 'react'
import axios from 'axios';
import getRandomNum from './Utilities/RandomNum'
import GetMoves from './getMoves'
import PokeContainer from './pokeContianer'
// import Abilities from './Abilities'


class Pokemon extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            randomNum: getRandomNum(801, 1),
            pokeInfo: [],
            sprites: {
                front: '',
                back: ''
            },
            hp: ''
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
            this.setState({
                pokeInfo: data,
                randomNum: getRandomNum(801, 1),
                sprites: {
                    front: data.sprites.front_default,
                    back: data.sprites.back_default
                },
                hp: data.stats[5].base_stat
            })
        } catch (error) {
            console.log(error);

        }
    }

    handleNewPokemon = async (e) => {
        let randomNum = this.state.randomNum
        await this.generatePoke(randomNum)
    }

    render() {

        console.log('Api request state', this.state);
        const { pokeInfo, sprites, hp } = this.state
        // console.log(pokeInfo.sprites);


        return (
            <div className='requestContainer'>
                <button onClick={this.handleNewPokemon}>Summon Pokemon</button>
                <GetMoves pokeInfo={pokeInfo} pokeHp={hp} />
                <PokeContainer frontPic={sprites.front} name={pokeInfo.name} pokeHp={hp} />
            </div>)
    }
}

export default Pokemon