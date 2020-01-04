import React from 'react'
import axios from 'axios';
import { connect } from "react-redux";
import getRandomNum from '../Utilities/RandomNum'
// import GetMoves from './getMoves'
// import Abilities from './Abilities'
import { mapStateToProps, mapDispatchToProps } from '../reduxUtilities'
import PokeContainer from './pokeContianer'

class Pokemon extends React.Component {
    // constructor(props) {
    //     super(props)
    // }


    componentDidMount() {
        this.handleNewPokemon()
    }


    generatePoke1 = async () => {
        console.log('hit');
        let randNum = getRandomNum(801, 1)

        let url = `https://pokeapi.co/api/v2/pokemon/${randNum}`
        try {
            //getting the pokemon from pokemon end point with random number
            const { data } = await axios.get(url)
            this.props.requestPoke(data)
            // console.log(data);
        } catch (error) {
            console.log(error);

        }
    }
    generatePoke2 = async () => {
        console.log('hit');
        let randNum = getRandomNum(801, 1)
        let url = `https://pokeapi.co/api/v2/pokemon/${randNum}`
        try {
            //getting the pokemon from pokemon end point with random number
            const { data } = await axios.get(url)
            this.props.requestPoke(data)
        } catch (error) {
            console.log(error);

        }
    }

    handleNewPokemon = async (e) => {
        await this.generatePoke1()

    }

    render() {
        // <GetMoves poke={poke1} pokeHp={poke1.hp} />
        // console.log('Api request state', this.state);
        // const { poke1, poke2, hp } = this.state
        return (
            <div className='requestContainer'>
                <button onClick={this.handleNewPokemon}>Summon Pokemon</button>
                <PokeContainer />
            </div>)

    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Pokemon)