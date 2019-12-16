import React from 'react'

class PokeContainer extends React.Component {
    constructor(props) {
        super(props)
        console.log('pokeContainer');

    }

    render() {
        return (<>
            <div className='pokemon'>
                <div className='subContainer'>
                    <img src={this.props.pokeImg} alt="pokemon" />
                    <p className='pokemonName'>{this.props.name}</p>
                    <p className='pokeHp'>this.props.pokeHp</p>
                    <div className='moves'>
                        <p className='pokeMoves'>{this.props.pokeMove}</p>
                        <p className='pokeMoves'></p>
                        <p className='pokeMoves'></p>
                    </div>
                    <div className='power'>
                        <p className='pokePPP'></p>
                        <p className='pokePPP'></p>
                        <p className='pokePPP'></p>
                    </div>

                </div>

            </div>

        </>)
    }
}


export default PokeContainer