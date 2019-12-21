import React from 'react'

class Abilities extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            abilitiesArr: []
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.pokeInfo !== prevProps.pokeInfo) {
            this.getAbilities(this.props.pokeInfo)

        }
    }

    getAbilities = async (pokeInfo) => {
        this.setState({
            abilitiesArr: pokeInfo.abilities
        })
    }


    abilitiesButton = () => {
        let abs = []
        const { abilities } = this.state
        console.log('abilities state', this.state)

        abilities.map(el => {
            // if (!el.is_hidden) {
            return abs.push(
                <li >{el.ability.name}</li>
            )
            // }
        });
        return abs
    }

    render() {
        return (

            <div className='abilities'>
                <ul>
                    <li>hnj</li>
                    {
                        this.abilitiesButton()
                        // this.props.abilitiesArr.array.forEach(el => {
                        //     return (<li>{el.ability.name}</li>)
                        // })
                    } </ul>
            </div>
        )
    }
}

export default Abilities