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
            <Pokemon />
        )
    }


}

export default Battle