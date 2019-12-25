import { callPokemon, attack } from './actions/pokemonActions'

export const mapStateToProps = state => {
    console.log('mapStateToProps log', state);
    return { poke1: state.pokemonReducer.poke1 };

};
