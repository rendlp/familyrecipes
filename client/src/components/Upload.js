import React, { Component } from 'react';
import '../styles/base.css'
import { addRecipe, addIngredients } from '../actions/actions';
import Header from './header'
import Footer from './footer'

class FormContainer extends Component {

    state = {
        name:'',
        nameError:'',
        nameClass:'',
        ingredients:'',
        ingredientsError:'',
        ingredientsClass:'',
        prep:'',
        prepError:'',
        prepClass:'',
        directions:'',
        directionsError:'',
        directionsClass:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let valid = true

// NAME
        if (this.state.name !== '') {
            this.setState({
                nameError: '',
                nameClass: ''
            })
            addRecipe({
                name: this.state.name
            })
        } else {
            valid = false
            this.setState({
                nameError: " - Cannot be blank",
                nameClass: 'error'
            })
        }

 // INGREDIENTS
        if (this.state.ingredients !== '') {
            this.setState({
                ingredientsError:'',
                ingredientsClass:''
            })
            addIngredients({
                ingredients: this.state.ingredients
            })
        } else {
            valid = false
            this.setState({
                ingredientsError:" - Cannot be blank",
                ingredientsClass:'error'
            })
        }

// DIRECTIONS
    if (this.state.directions !== '') {
        this.setState({
            directionsError:'',
            directionsClass:''
        })
        addRecipe({
            directions: this.state.directions
        })
    } else {
        valid = false
        this.setState({
            directionsError:" - Cannot be blank",
            directionsClass:'error'
        })

    }
}

   render() {
       return (
         <div>
          <Header />

            <div className="recipeContainer">
             <h1>Upload A Recipe</h1>
                <form id="formcontainer" onSubmit ={this.handleSubmit}>

                {/* // NAME */}

                <div className="test">
                   <label htmlFor='name' className={this.state.nameClass}>
                     Name {this.state.nameError}
                    </label>
                    <input
                    className={this.state.nameClass}
                    type="text"
                    ref="name"
                    name="name"
                    id="name"
                    onChange= {this.handleChange}
                    value= {this.state.name} />

                {/* // INGREDIENTS */}

                   <label htmlFor='name' className={this.state.ingredientsClass}>
                     Ingredients {this.state.ingredientsError}
                    </label>
                    <input
                    className={this.state.ingredientsClass}
                    type="text"
                    ref="ingredients"
                    name="ingredients"
                    id="ingredients"
                    onChange= {this.handleChange}
                    value= {this.state.ingredients} />

                {/* // PREP TIME */}

                 <label htmlFor='name' className={this.state.prepClass}>
                     Prep Time {this.state.prepError}
                    </label>
                   <div className="selectorDiv">

                    <select>
                    className={this.state.prepClass}
                    type="text"
                    name="prep"
                    id="prep"
                    onChange= {this.handleChange}
                    value= {this.state.prep}
                    <option>0 Hours</option>
                    <option>1 Hour</option>
                    <option>2 Hours</option>
                    <option>3 Hours</option>
                    <option>4 Hours</option>
                    <option>5 Hours</option>
                    <option>6 Hours</option>
                    <option>7 Hours</option>
                    <option>8 Hours</option>
                    <option>9 Hours</option>
                    <option>10 Hours</option>
                    <option>11 Hours</option>
                    <option>12 Hours</option>
                    {/* <option>13 Hours</option>
                    <option>14 Hours</option>
                    <option>15 Hours</option>
                    <option>16 Hours</option>
                    <option>17 Hours</option>
                    <option>18 Hours</option>
                    <option>19 Hours</option>
                    <option>20 Hours</option>
                    <option>21 Hours</option>
                    <option>22 Hours</option>
                    <option>23 Hours</option>
                    <option>24 Hours</option> */}
                    </select>

                    <select>
                    className={this.state.prepClass}
                    type="text"
                    name="prep"
                    id="prep"
                    onChange= {this.handleChange}
                    value= {this.state.prep}
                    <option>0 Minutes</option>
                    <option>5 Minutes</option>
                    <option>10 Minutes</option>
                    <option>15 Minutes</option>
                    <option>20 Minutes</option>
                    <option>25 Minutes</option>
                    <option>30 Minutes</option>
                    <option>35 Minutes</option>
                    <option>40 Minutes</option>
                    <option>45 Minutes</option>
                    <option>50 Minutes</option>
                    <option>55 Minutes</option>
                    </select>
                    </div>
  </div>
                {/* // DIRECTIONS */}
                <div className="directionDiv">
                  <label htmlFor='name' className={this.state.directionsClass}>
                     Directions {this.state.directionsError}
                    </label>
                    <textarea
                    className={this.state.directionsClass}
                    type="text"
                    ref="recipes_directions"
                    name="directions"
                    id="directions"
                    onChange= {this.handleChange}
                    value= {this.state.directions} />

                 {/* SUBMIT */}

                 <button
                 onSubmit={this.handleSubmit}
                 className="submitButton"
                 type="submit">Submit</button>
                 </div>
                </form>
                <Footer />
              </div>
            </div>
        )
     }
   }



export default FormContainer;
