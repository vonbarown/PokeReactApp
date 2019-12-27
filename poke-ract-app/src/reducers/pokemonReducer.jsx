import { REQUEST_POKEMON, RECEIVED_POKEMON } from "../actions/actionTypes";

const initialState = {
    poke1: {
        info: [],
        sprites: {
            front: '',
            back: ''
        },
        hp: ''
    },
    poke2: {
        info: [],
        spritesFront: {
            front: '',
            back: ''
        },
        hp: ''
    },
    isFetching: false,
    didInvalidate: false
};

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_POKEMON:
            return Object.assign({}, state, {
                poke1: {
                    info: action.data
                },
                isFetching: true
            })
        case RECEIVED_POKEMON:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:

            return state;
    }
};

export default pokemonReducer;
