import { REQUEST_POKEMON } from "../actions/actionTypes";

const initialState = {
    poke1: {
        info: [],
        sprites: {
            front: '',
            back: ''
        }
    },
    poke2: {
        info: [],
        sprites: {
            front: '',
            back: ''
        }
    },
    hp: ''
};

const pokemonReducer = (state = initialState, action) => {
    let newState = { state };

    if (action.type === REQUEST_POKEMON) {
        // newState.posts = newState.posts.concat(action.payload);
    }
    // if (action.type === ATTACK) {
    //     // newState.posts = [...newState.posts, ...action.payload];
    // }

    return newState;
};

export default pokemonReducer;
