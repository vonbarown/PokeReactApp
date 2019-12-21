import React, { Component } from 'react'
import Pokemon from '../apiRequest';

class Battle extends Component {


    render() {
        return (
            <div className='battleContainer'>
                <Pokemon />
                <Pokemon />
            </div>)
    }


}

export default Battle