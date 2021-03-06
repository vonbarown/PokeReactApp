import { REQUEST_POKEMON, RECEIVED_POKEMON } from "../actions/actionTypes";

const initialState = {
    poke1: {
        info: {},
        sprites: {
            front: '',
            back: ''
        },
        hp: ''
    },
    isFetching: false,
};

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_POKEMON:
            return Object.assign({}, state, {
                poke1: {
                    info: action.data,
                    sprites: action.data.sprites,
                    hp: action.data.stats[5].base_stat
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

// export default pokemonReducer;
