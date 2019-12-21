import React from 'react'
import axios from 'axios';
import getRandomNum from './Utilities/RandomNum'

class GetMoves extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            randomIndex: getRandomNum(801, 1),
            moves: []
        }
    }

    componentDidMount() {
        this.handleNewPokemon()
    }


    getMoves = async (pokeInfo) => {
        //getting the moves of the pokemon generated
        console.log(pokeInfo.moves);
        let randomIndex = await getRandomNum(pokeInfo.moves.length, 0)
        console.log(randomIndex);

        let url = pokeInfo.moves[`${randomIndex}`].move.url;
        console.log(url);
        let movesInfo = await axios.get(url)
        return movesInfo.data;
    }

    handleNewPokemon = async (e) => {
        let randomNum = this.state.randomNum
        await this.generatePoke(randomNum)
        // await this.generatePoke(randomNum)
    }



    // componentDidMount() {
    //     this.getDogBreeds()
    // }



    handleBreedChange = (event) => {
        const newBreed = event.target.value
        this.setState({
            selectedBreed: newBreed
        })

        this.props.getDogPicture(newBreed);
    }

    populateSelect = () => {
        const { breeds } = this.state;
        let breedOptions = [];
        breeds.forEach((breed) => {
            breedOptions.push(
                <option key={breed}>{breed}</option>
            )
        })
        return breedOptions;
    }

    resetSelect = (event) => {
        this.setState({
            selectedBreed: '',
            numOfDogs: ''
        })
    }

    getDogBreeds = async () => {
        let dogBreedAPIURL = 'https://dog.ceo/api/breeds/list/all'
        try {
            const response = await axios.get(dogBreedAPIURL)
            const data = response.data
            const allBreeds = Object.keys(data.message)
            console.log("types of dog", allBreeds)

            this.setState({
                breeds: allBreeds
            })

            // this.breeds = allBreeds;
        } catch (error) {
            console.log("Oops All Errors!", error)
        }
    }

    handleNewDogButton = e => {
        const { getDogPicture } = this.props;
        const { selectedBreed } = this.state;
        getDogPicture(selectedBreed)
    }




    render() {

        console.log(this.state);

        return (<>
            <p>hello</p>
            <button onClick={this.handleNewPokemon}>Summon Pokemon</button>
        </>)
    }
}

export default GetMoves