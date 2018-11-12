import React, {Component} from 'react'
import { BASE_URL } from '../const'
import axios from 'axios';

class AddCocktail extends Component {
    constructor(props) {
        super(props)
        this.input = null
        this.pushCocktail = this.pushCocktail.bind(this)
    }


    async  pushCocktail() {
        try{
            await axios
            .post(
                `${BASE_URL}cocktail`, 
                {
                    name: this.input.value
                },
                {
                    'Content-Type': 'application/json'
                }
                )
            this.props.sri(this.input.value)
        } catch (e) {

    }
    }

    render() {
        return (
            <div>
                <input
                    // ref is reference to the DOM element
                    ref={ele => this.input = ele}/>
                <button
                    onClick={this.pushCocktail}>
                    Save me
                </button>
            </div>
        )
    }
}

export default AddCocktail