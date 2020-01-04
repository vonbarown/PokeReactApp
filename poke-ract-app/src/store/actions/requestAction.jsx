import {
    REQUEST_POKEMON
} from './actionTypes';



export const requestPoke = (data) => {
    return {
        type: REQUEST_POKEMON,
        data
    }
}
