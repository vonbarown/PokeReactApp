import React, { Component } from 'react'
import Pokemon from '../apiRequest';

class Battle extends Component {


    render() {
        return (
            <div className='battleContainer'>

                <div className='battlePokeContainer'>
                    <Pokemon />
                    <Pokemon />
                </div>

                <div className='battleButton'>
                    <button>Battle</button>
                </div>
            </div>)
    }


}

export default Battle