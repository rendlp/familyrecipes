import React, { Component } from 'react'
import {changeStatus} from '../../actions/saveInput'

class IngredientItem extends Component {

    handleClick = (e) => {
        changeStatus(this.props.id)

    }

    render() {
        return (
            <li 
             className='ingredientLI'
             onClick={this.handleClick}>{this.props.input}
            </li>
        )
    }
}

export default IngredientItem;