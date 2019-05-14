import React, { Component } from 'react'
import '../../styles/base.css'
import { saveInput } from '../../actions/saveInput'

class Ingredient extends Component {
    state= {
        input: '',
        ingredients: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.input !== '') {
            saveInput(this.state.input)
            this.setState({
                input: ''
            })
        }
    }

    render(){
        return (
          <form 
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}>
             <h1>Ingredients</h1>
              <input 
                type="text"
                name="input"
                className="inputClass"
                value={this.state.input}
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                placeholder="What do you need?">
              </input>
</form>
        )
    }
}

export default Ingredient;