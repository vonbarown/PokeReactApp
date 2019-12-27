import React, { Component } from 'react'
import Pokemon from '../apiRequest';

class Battle extends Component {
    constructor() {
        super()
        this.state = {
            poke1: <Pokemon />,
            poke2: <Pokemon />
        }
    }


    render() {
        return (
            <div className='battleContainer'>

                <div className='battlePokeContainer'>
                    <Pokemon />
                </div>

                <div className='battleButton'>
                    <button>Battle</button>
                </div>
            </div>)
    }


}

export default Battle