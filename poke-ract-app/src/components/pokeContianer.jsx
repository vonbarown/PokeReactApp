import React from 'react'
import { mapStateToProps, mapDispatchToProps } from '../Utilities/reduxUtilities'
import { connect } from "react-redux";



class PokeContainer extends React.Component {
    constructor(props) {
        super(props)
        console.log('pokeContainer');

    }

    render() {
        const { poke1 } = this.props.state

        return (<>
            <div className='pokemon'>
                <div className='subContainer'>
                    <p className='pokemonName'>{poke1.info.name}</p>
                    <img src={poke1.sprites.front_default} alt="pokemon" />
                    <p className='pokeHp'>HP: {poke1.hp}</p>
                </div>

            </div>

        </>)
    }
}


export default connect(
    mapStateToProps, mapDispatchToProps
)(PokeContainer)