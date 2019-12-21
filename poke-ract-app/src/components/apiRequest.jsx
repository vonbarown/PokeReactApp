import React from 'react'
import axios from 'axios';
import getRandomNum from './Utilities/RandomNum'
import GetMoves from './getMoves'
// import Abilities from './Abilities'


class Pokemon extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // randomNum: getRandomNum(801, 1),
            poke1: {
                info: [],
                sprites: {
                    front: '',
                    back: ''
                }
            },
            // poke2: {
            //     info: [],
            //     sprites: {
            //         front: '',
            //         back: ''
            //     }
            // },
            // hp: ''
        }
    }

    componentDidMount() {
        this.handleNewPokemon()
    }


    generatePoke1 = async () => {
        console.log('hit');
        let randNum = getRandomNum(801, 1)

        let url = `https://pokeapi.co/api/v2/pokemon/${randNum}`
        try {
            //getting the pokemon from pokemon end point with random number
            const { data } = await axios.get(url)
            this.setState({
                poke1: {
                    info: data,
                    sprites: {
                        front: data.sprites.front_default,
                        back: data.sprites.back_default
                    },
                    hp: data.stats[5].base_stat
                },
            })
        } catch (error) {
            console.log(error);

        }
    }
    // generatePoke2 = async () => {
    //     console.log('hit');
    //     let randNum = getRandomNum(801, 1)

    //     let url = `https://pokeapi.co/api/v2/pokemon/${randNum}`
    //     try {
    //         //getting the pokemon from pokemon end point with random number
    //         const { data } = await axios.get(url)
    //         this.setState({
    //             poke2: {
    //                 info: data,
    //                 sprites: {
    //                     front: data.sprites.front_default,
    //                     back: data.sprites.back_default
    //                 },
    //                 hp: data.stats[5].base_stat
    //             },
    //         })
    //     } catch (error) {
    //         console.log(error);

    //     }
    // }

    handleNewPokemon = async (e) => {
        // let randomNum = getRandomNum()
        await this.generatePoke1()
    }

    render() {

        console.log('Api request state', this.state);
        const { poke1, poke2, hp } = this.state
        // console.log(poke1.sprites);


        return (
            <div className='requestContainer'>
                <button onClick={this.handleNewPokemon}>Summon Pokemon</button>
                <GetMoves poke={poke1} pokeHp={poke1.hp} />

            </div>)
    }
}

export default Pokemon