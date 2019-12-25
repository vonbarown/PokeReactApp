import { Call_Pokemon, Attack } from "../actions/actionTypes";
import { generatePoke1 } from '../actions/axiosGetRequestAction'

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
        sprites: {
            front: '',
            back: ''
        },
        hp: ''
    }
};
// const poke1Data = generatePoke1();
// // const poke2Data = generatePoke1()
// console.log(poke1Data);


const pokemonReducer = (state = initialState, action) => {
    let newState = { state };
    console.log('help', newState);
    const poke1Data = generatePoke1();
    // const poke2Data = generatePoke1()
    // console.log('poke1data', poke1Data);

    // switch (action.type) {
    //     case Call_Pokemon:
    return (
        {
            newState,
            poke1: {
                info: poke1Data,
                // sprites: {
                //     front: poke1Data.sprites.front_default,
                //     back: poke1Data.sprites.back_default
                // },
                // hp: poke1Data.stats[5].base_stat
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
