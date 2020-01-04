import { requestPoke } from './actions/requestAction'

export const mapStateToProps = state => {
    console.log('mapStateToProps log', state);
    return { state: state.pokemonReducer };

};

export const mapDispatchToProps = dispatch => {
    return {
        requestPoke: data => dispatch(requestPoke(data)),
    };
};