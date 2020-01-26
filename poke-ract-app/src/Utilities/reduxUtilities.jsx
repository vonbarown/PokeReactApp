import { requestPoke } from '../store/actions/requestAction'

export const mapStateToProps = state => {
    return { state: state.pokemonReducer };

};

export const mapDispatchToProps = dispatch => {
    return {
        requestPoke: data => dispatch(requestPoke(data)),
    };
};