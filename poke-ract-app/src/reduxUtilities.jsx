import { callPokemon, attack } from './actions/pokemonActions'

export const mapStateToProps = state => {
    console.log('mapStateToProps log', state);
    return { state: state.pokemonReducer.poke1 };

};
