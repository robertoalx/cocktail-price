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

    AddCocktailToState = something => {
        console.log(`And this will be saved: ${something}` )
        this.setState({
            cocktail: [...this.state.cocktail, {
                id: this.state.cocktail.length +1,
                name: something
            }]
        })
        console.log(this.state.cocktail)
    }

    renderCocktail = () => {
        return this.state.cocktail.map((cocktail, key) => <p key={key}>{cocktail.name}</p>)
    }

    render() {
        return (
            <div>
                <div>{this.renderCocktail()}</div>
                <AddCocktail  sri={this.AddCocktailToState} />
            </div>
            
        )
    }
}

export default Cocktail