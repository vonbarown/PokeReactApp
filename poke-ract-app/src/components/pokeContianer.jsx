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
                    <p className='pokemonName'>{this.props.name}</p>
                    <img src={this.props.frontPic} alt="pokemon" />
                    <p className='pokeHp'>HP: {this.props.pokeHp}</p>
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