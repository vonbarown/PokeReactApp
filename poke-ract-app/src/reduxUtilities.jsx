import { callPokemon, attack } from './actions/pokemonActions'

export const mapStateToProps = state => {
    console.log('trying out redux');
    return { poke1: state.pokemonReducer.poke1 };

};
