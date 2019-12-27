import { requestPoke } from './actions/requestAction'

export const mapStateToProps = state => {
    console.log('mapStateToProps log', state);
    return { state: state.pokemonReducer.poke1 };

};

export const mapDispatchToProps = dispatch => {
    return {
        requestPoke: randNum => dispatch(requestPoke(randNum)),
    };
};