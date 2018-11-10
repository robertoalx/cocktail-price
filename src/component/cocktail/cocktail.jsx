import React, {Component} from 'react'
import AddCocktail from './AddCocktail'
import axios from 'axios'

const BASE_URL = 'http://localhost:3455/'

class Cocktail extends Component {

    state = {
        cocktail:[]
    }

    async getCocktail() {
            let {data} = await axios.get(`${BASE_URL}cocktail`)
            this.setState({cocktail:data})

    }

    componentDidMount() {
    //     axios
    //         .get(`${BASE_URL}cocktail`)
    //         .then(({data}) => {
    //             this.setState({cocktail:data})
    //         })
        this.getCocktail()
    }

    render() {
        return (
            [
            <h2>{this.state.cocktail.map(cocktail => <h3>{cocktail.name}</h3>)}</h2>,
            <AddCocktail />
        ]
        )
    }
}

export default Cocktail