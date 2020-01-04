import React from 'react'

class GetMoves extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            moves: [],
            selectedMove: ''
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.pokeInfo !== prevProps.pokeInfo) {
            this.getMoves(this.props.pokeInfo)

        }
    }

    getMoves = async (pokeInfo) => {

        // console.log('hepoxy', pokeInfo);
        let movesArray = pokeInfo.moves
        console.log(movesArray);
        try {
            this.setState({
                moves: movesArray
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

    populateSelect = () => {
        const { moves } = this.state;
        let moveOptions = [];
        moves.forEach((moveOp) => {
            console.log(moveOp.url);

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
        // console.log("move selection state", this.state);
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