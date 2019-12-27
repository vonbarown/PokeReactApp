import fetch from 'cross-fetch'
import {
    REQUEST_POKEMON, RECEIVED_POKEMON, SELECT_POKEMON
} from './actionTypes';

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
