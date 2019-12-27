import fetch from 'cross-fetch'
import {
    REQUEST_POKEMON, RECEIVED_POKEMON, SELECT_POKEMON
} from './actionTypes';

// import randNum from '../components/Utilities/RandomNum'


export function selectPokemon(poke) {
    return {
        type: SELECT_POKEMON,
        poke
    }
}
export const requestPoke = (data) => {
    return {
        type: REQUEST_POKEMON,
        data
    }
}

export const receivePoke = (randNum, data) => {
    return {
        type: RECEIVED_POKEMON,
        randNum,
        poke: data,
        receivedAt: Date.now()
    }
}
export const fetchPoke = async (randNum) => {
    // try {
    //     //getting the pokemon from pokemon end point with random number
    //     const { data } = await axios.get(url)
    //     console.log(data);
    // } catch (error) {
    //     console.log(error);

    // }
    return function (dispatch) {
        // First dispatch: the app state is updated to inform
        // that the API call is starting.
        console.log('sedrxcvgjhbkn');

        dispatch(requestPoke(randNum))
        return fetch(`https://pokeapi.co/api/v2/pokemon/${randNum}`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(receivePoke(randNum, json))
            )
    }
}
