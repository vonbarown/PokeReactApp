import { Call_Pokemon, Attack } from "../actions/actionTypes";
import { generatePoke1 } from '../actions/axiosGetRequestAction'

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
    }
};
const poke1Data = generatePoke1();
const poke2Data = generatePoke1()

const pokemonReducer = (state = initialState, action) => {
    let newState = { state };

    console.log('help', newState);
    // switch (action.type) {
    //     case Call_Pokemon:
    return (
        {
            poke1: {
                info: poke1Data,
                sprites: {
                    // front: poke1Data.sprites.front_default,
                    // back: poke2Data.sprites.back_default
                }
            }
        }
    )

    //     default:
    //         break;
    // }

    // if (action.type === Call_Pokemon) {
    //     newState.info = 'hello'
    // }
    // if (action.type === Attack) {
    //     // newState.posts = [...newState.posts, ...action.payload];
    //     console.log('bye');

    // }

    // return newState;
};

export default pokemonReducer;
