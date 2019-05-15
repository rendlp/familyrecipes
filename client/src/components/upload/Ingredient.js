import React, { Component } from 'react'
import '../../styles/base.css'
import { saveInput } from '../../actions/saveInput'
import { addIngredients } from '../../actions/actions';

class Ingredient extends Component {
    state= {
        input: '',
        ingredients: '',
        
    }

    ingredientChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitIngredient = e => {
        e.preventDefault();
        if (this.state.input !== '') {  
              addIngredients({
                ingredients: this.state.input
            })
            saveInput(this.state.input)
            this.setState({
                input: ''
            })
        }
    }

    render(){
        return (
          <form 
          onSubmit={this.submitIngredient}>
             <h1>Ingredients</h1>
              <input 
                type="text"
                name="input"
                className="inputClass"
                value={this.state.input}
                onSubmit={this.submitIngredient}
                onChange={this.ingredientChange}
                placeholder="What do you need?">
              </input>
</form>
        )
    }
}

export default Ingredient;