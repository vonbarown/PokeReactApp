import { Call_Pokemon, Attack } from "./actionTypes";
import { generatePoke1 } from './axiosUtility/axiosGetRequest'



export const callPokemon = payload => {
    return { type: Call_Pokemon, payload };
};

export const attack = payload => {
    return { type: Attack, payload };
};