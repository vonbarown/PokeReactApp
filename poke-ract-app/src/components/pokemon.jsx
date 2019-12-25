import React from 'react'
import Pokemon from './apiRequest'


class PocketMonster extends React.Component {
    constructor() {
        super()
        console.log('pokemans');

    }

    //This function create the elements on the create that will hold the pokemon information
    creatingCard = async (pokemon) => {
        // container = getContainer()
        //creating the elements that will hold the information on the pokemon
        const subContainer = creatingElem('div')
        // document.createElement('div');
        subContainer.className = 'pokeContainer'
        const pokePic = this.creatingElem('img')
        const pokeName = document.createElement('p')
        pokeName.className = 'pokemonName'
        const pokeHp = document.createElement('p')
        const pokeMoves = document.createElement('p')
        let ppMovesArray = [pp1Moves, pp2Moves, pp3Moves]
        let pokePPPara = [pokePowerPoint1, pokePowerPoint2, pokePowerPoint3]
        let subContainerArray = [pokeName, pokePic, pokeHp, pokeMoves]
        for (let i = 0; i < pokePPPara.length; i++) {
            pokePPPara[i] = this.creatingElem('p')
        }
        //assigning the innerText of the elements created to display the information
        pokeName.innerText = pokemon.name

        if (pokemon.sprites.front_default != null) {
            pokePic.src = pokemon.sprites.front_default
        } else {
            pokePic.src = 'https://images-na.ssl-images-amazon.com/images/I/51YxooVI5%2BL._SX425_.jpg'
        }
        pokeHp.innerText = `HP: ${pokemon.stats[5].base_stat}`
        pokeMoves.innerText = 'Moves:'

        //getting the moves from the moves endpoint function
        //assigning the power point elements with the power info from the moves endpoint
        for (let i = 0; i < ppMovesArray.length; i++) {
            ppMovesArray[i] = await getMoves(pokemon);
            console.log(ppMovesArray[i]);
            pokePPPara[i].innerText = `${ppMovesArray[i].name} PP:${ppMovesArray[i].pp}`
            subContainerArray.push(pokePPPara[i])
        }
        //now appending the newly created elements to the subContainer   
        for (let i = 0; i < subContainerArray.length; i++) {
            subContainer.appendChild(subContainerArray[i])
            console.log(i + 'hello');
        }
        //appending thd subContainer that holds the created elements to the container
        container.appendChild(subContainer)
    }

    creatingElem = (elem) => document.createElement(`${elem}`);

}

export default PocketMonster;