import { Call_Pokemon, Attack } from "../actions/actionTypes";

const initialState = {
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
    // }
};

const pokemonReducer = (state = initialState, action) => {
    let newState = { state };

    if (action.type === Call_Pokemon) {
        // newState.posts = newState.posts.concat(action.payload);
    }
    if (action.type === Attack) {
        // newState.posts = [...newState.posts, ...action.payload];
    }

    return newState;
};

export default pokemonReducer;
