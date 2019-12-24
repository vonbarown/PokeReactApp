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

    console.log('help', newState);

    if (action.type === Call_Pokemon) {
        newState.info = 'hello'
    }
    if (action.type === Attack) {
        // newState.posts = [...newState.posts, ...action.payload];
        console.log('bye');

    }

    return newState;
};

export default pokemonReducer;
