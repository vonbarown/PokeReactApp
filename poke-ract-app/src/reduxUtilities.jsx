import { Call_Pokemon, Attack } from './actions/pokemonActions'

export const mapStateToProps = state => {
    return { poke1: state.pokemonReducer.poke1 };
};