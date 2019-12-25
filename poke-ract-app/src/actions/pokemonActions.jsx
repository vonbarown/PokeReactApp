import axios from 'axios'
import getRandomNum from '../components/Utilities/RandomNum'
import { ATTACK, RECEIVED_POKEMON, REQUEST_POKEMON, API } from "./actionTypes";


export const generatePoke = async () => {
    const randNum = getRandomNum()
    return apiAction({
        url: `https://pokeapi.co/api/v2/pokemon/${randNum}`,
        onSuccess: setPokemonData,
        onFailure: () => console.log("Team rocket intercepted"),
        label: REQUEST_POKEMON

    })
}

function setPokemonData(data) {
    return {
        type: RECEIVED_POKEMON,
        payload: data
    };
}


function apiAction({
    url = "",
    method = "GET",
    data = null,
    accessToken = null,
    onSuccess = () => { },
    onFailure = () => { },
    label = "",
    headersOverride = null
}) {
    return {
        type: API,
        payload: {
            url,
            method,
            data,
            accessToken,
            onSuccess,
            onFailure,
            label,
            headersOverride
        }
    };
}

