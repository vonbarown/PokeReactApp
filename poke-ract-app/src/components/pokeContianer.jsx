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