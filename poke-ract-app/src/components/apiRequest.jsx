import React from 'react'
import axios from 'axios'

class Pokemon extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            randomNum: ''
        }
    }


    componentDidMount() {
        this.props.generatePoke()
    }

    getRandomNum = () => {
        this.setState({
            randomNum: Math.floor((Math.random() * 867) + 1)
        })
    };


    render() {
        console.log(this.state);

        return (

            <button onClick={this.getRandomNum}>Hello</button>
        )
    }
}

export default Pokemon