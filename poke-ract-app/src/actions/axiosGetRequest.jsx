import getRandomNum from '../components/Utilities/RandomNum'
import axios from 'axios'

export const generatePoke1 = async () => {
    console.log('hit');
    let randNum = getRandomNum(801, 1)

    let url = `https://pokeapi.co/api/v2/pokemon/${randNum}`
    try {
        //getting the pokemon from pokemon end point with random number
        const { data } = await axios.get(url)
        console.log("actions data", data);

        // this.setState({
        //     poke1: {
        //         info: data,
        //         sprites: {
        //             front: data.sprites.front_default,
        //             back: data.sprites.back_default
        //         },
        //         hp: data.stats[5].base_stat
        //     },
        // })
        return data
    } catch (error) {
        console.log(error);

    }
}