import React from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import PokeContainer from './pokeContianer'


class GetMoves extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            moves: [],
            selectedMove: '',
            moveInfo: {
                movePP: 0,
                moveName: ''
            },
            hp: 0
        }
    }

    componentDidMount() {
        console.log('mounted');


    }
    componentDidUpdate(prevProps, prevState) {
        // let { moveInfo } = this.state

        if (this.props.poke !== prevProps.poke) {
            this.getMoves(this.props.poke.info)

        }

        if (this.state.selectedMove !== prevState.selectedMove) {
            this.handleAttack(this.state.selectedMove)
            // toast.success(`You used: ${moveInfo.moveName}`);
        }

    }

    toaster = () => {
        let { moveInfo } = this.state

        toast.success(`You used: ${moveInfo.moveName}`);

    }

    getMoves = async (poke) => {

        // console.log('hepoxy', poke);

        try {
            this.setState({
                moves: poke.moves,
                hp: poke.stats[5].base_stat
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
            // console.log('this is move', data);
            this.setState({
                moveInfo: {
                    movePP: data.pp,
                    moveName: data.name
                }
            })

        } catch (error) {
            console.log(error);

        }
    }

    handleAttack = () => {
        this.getPP()
        let { hp, moveInfo } = this.state
        this.setState({
            hp: hp - moveInfo.movePP
        })
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

        // console.log("move selection state", this.state);
        const { selectedMove, hp } = this.state
        const { poke } = this.props

        return (<>
            <select onChange={this.handleMoveSelection} value={selectedMove}>
                <option value=""></option>
                {
                    this.populateSelect()
                }
            </select>
            <button onClick={this.resetSelect}>Reset</button>
            <PokeContainer frontPic={poke.sprites.front} name={poke.info.name} pokeHp={hp} />

        </>)
    }
}

export default GetMoves