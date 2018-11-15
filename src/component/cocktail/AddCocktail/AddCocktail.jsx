import React, {Component} from 'react'
import { BASE_URL } from '../const'
import axios from 'axios';

class AddCocktail extends Component {
    constructor(props) {
        super(props)
        this.input = null
        this.pushCocktail = this.pushCocktail.bind(this)
    }


    async pushCocktail() {
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
            // When The Save me is clicked we reset the input value to nothing
            this.input.value = ''
            // can continue add value inside the input without clicking again to regain focus.
            this.input.focus()
        } catch (e) {

    }
    }

    handleClick = (event) => {
        if (event.keyCode === 13) {
            this.pushCocktail()
        }
    }

    render() {
        return (
            <div>
                <input
                    // ref is reference to the DOM element
                    ref={ele => this.input = ele}
                    onKeyDown={this.handleClick}
                />
                <button
                    onClick={this.pushCocktail}>
                    Add Cocktail
                </button>
            </div>
        )
    }
}

export default AddCocktail