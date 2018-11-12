import React, {Component} from 'react'
import AddCocktail from './AddCocktail'
import { BASE_URL } from './const'
import axios from 'axios'

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

    AddCocktailToState(something) {
        console.log(`And this will be saved ${something}` )
    }

    render() {
        return (
            [
            <div>{this.state.cocktail.map(cocktail => <p>{cocktail.name}</p>)}</div>,
            <AddCocktail  sri={this.AddCocktailToState} />
        ]
        )
    }
}

export default Cocktail