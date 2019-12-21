import React from 'react'
import axios from 'axios'


class GetMoves extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            moves: [],
            selectedMove: '',
            movePP: 0
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.pokeInfo !== prevProps.pokeInfo) {
            this.getMoves(this.props.pokeInfo)

        }

        if (this.state.selectedMove !== prevState.selectedMove) {
            this.getPP(this.state.selectedMove)

        }
    }

    getMoves = async (pokeInfo) => {

        // console.log('hepoxy', pokeInfo);

        try {
            this.setState({
                moves: pokeInfo.moves
            })
        } catch (error) {
            console.log("Here be errors", error);

        }

    }

    handleMoveSelection = e => {
        const newMove = e.target.value
        this.setState({
            selectedMove: newMove
        })

    }

    getPP = async e => {
        let { selectedMove } = this.state

        try {
            const { data } = await axios.get(selectedMove)
            console.log('this is move', data);
            this.setState({
                movePP: data.pp
            })

        } catch (error) {
            console.log(error);

        }
    }


    populateSelect = () => {
        const { moves } = this.state;
        let moveOptions = [];
        moves.forEach((moveOp) => {
            moveOptions.push(
                <option key={moveOp.move.url} value={moveOp.move.url}>{moveOp.move.name}</option>
            )
        })
        return moveOptions;
    }

    resetSelect = e => {
        this.setState({
            selectedMove: '',
        })
    }

    render() {

        console.log("move selection state", this.state);
        const { selectedMove } = this.state


        return (<>
            <select onChange={this.handleMoveSelection} value={selectedMove}>
                <option value=""></option>
                {
                    this.populateSelect()
                }
            </select>
            <button onClick={this.resetSelect}>Reset</button>

        </>)
    }
}

export default GetMoves