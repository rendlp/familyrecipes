import React, { Component } from 'react'
import Ingredient from '../upload/Ingredient'
import Prep from '../upload/Prep'
import { connect } from 'react-redux'
import Name from '../upload/Name'
import IngredientList from '../upload/IngredientList';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Directions from '../upload/Directions'

class Upload extends Component  {

    state = {
        name:'',
        prepHours:'',
        prepMinutes: '',
        directions:'',
        servings: '',
        input: '',
        recipes: []
        
    }

    componentWillReceiveProps() {
        console.log(this.props.recipes)
        console.log(this.props.inputs)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    recipeSubmit = (e) => {    
        e.preventDefault() 

    //    console.log({
    //      name: this.state.name,
    //      prepMinutes: this.state.prepMinutes,
    //      prepHours: this.state.prepHours,
    //      directions: this.state.directions,
    //      servings: this.state.servings,
    //      ingredients: this.props.inputs
    //     })
      }

    render() {
        return (
            <form id="formcontainer" onSubmit={this.recipeSubmit}>
            <div className ='uploadDiv'>

{/* BACK BUTTON */}
            <button><Link to='/'>Back</Link></button>

{/* NAME  */}
            <div>
             <Name />

{/* PREP */}
             <Prep />
            </div>

{/* INGREDIENTS */}
            <div className="ingredients">
            <Ingredient />
            <IngredientList />
            </div>

{/* DIRECTIONS */}
            <Directions />

{/* SUBMIT BUTTON */}
            <Link to='/upload/confirm'>
            <button 
             className="submitButton" 
             type="submit">Submit</button></Link>
            </div>
            </form>
        )
    }
}

function mapStateToProps(appState) {
    return {
        inputs: appState.inputs,
        recipes: appState.recipes
    }
}

export default connect(mapStateToProps)(Upload);
