import React, { Component } from 'react';
import '../styles/base.css'
import { addRecipe, addIngredients } from '../actions/actions';

class FormContainer extends Component {

    state = {
        name:'',
        nameError:'',
        nameClass:'',
        ingredients:'',
        ingredientsError:'',
        ingredientsClass:'',
        prepHours:'',
        prepMinutes: '',
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
     
        let valid = true

        if (this.state.name && 
            this.state.ingredients && 
            this.state.prepHours && 
            this.state.prepMinutes && 
            this.state.directions !== '') {
                this.setState({
                    nameError:'',
                    nameClass:'',
                    ingredientsError:'',
                    ingredientsClass:'',
                    prepError:'',
                    prepClass:'',
                    directionsError:'',
                    directionsClass:''
                })
                addRecipe({
                    name: this.state.name,
                    prepMinutes: this.state.prepMinutes,
                    prepHours: this.state.prepHours,
                    directions: this.state.directions
                })
                addIngredients({
                    ingredients: this.state.ingredients
                })
            } else {
                e.preventDefault()
                valid = false
                this.setState({
                    nameError:' - Cannot be blank',
                    nameClass:'error',
                    ingredientsError:' - Cannot be blank',
                    ingredientsClass:'',
                    prepError:' - Cannot be blank',
                    prepClass:'error',
                    directionsError:' - Cannot be blank',
                    directionsClass:'error'
                })
            }
}

   render() {
       return (
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

                <select className={this.state.prepClass}
                    type="text" 
                    name="prepHours" 
                    id="prepHours" 
                    onChange= {this.handleChange}  >
                    
                    <option>Hours?</option>
                    <option value='0' >0 Hours</option>
                    <option value='1'>1 Hour</option>
                    <option value='2'>2 Hours</option>
                    <option value='3'>3 Hours</option>
                    <option value='4'>4 Hours</option>
                    <option value='5'>5 Hours</option>
                    <option value='6'>6 Hours</option>
                    <option value='7'>7 Hours</option>
                    <option value='8'>8 Hours</option>
                    <option value='9'>9 Hours</option>
                    <option value='10'>10 Hours</option>
                    <option value='11'>11 Hours</option>
                    <option value='12'>12 Hours</option>
                </select>
                
                <select 
                    className={this.state.prepMClass}
                    type="text" 
                    name="prepMinutes" 
                    id="prepMinutes" 
                    onChange= {this.handleChange} >
                    
                    <option>Minutes?</option>
                    <option value="0">0 Minutes</option>
                    <option value="5">5 Minutes</option>
                    <option value="10">10 Minutes</option>
                    <option value="15">15 Minutes</option>
                    <option value="20">20 Minutes</option>
                    <option value="25">25 Minutes</option>
                    <option value="30">30 Minutes</option>
                    <option value="35">35 Minutes</option>
                    <option value="40">40 Minutes</option>
                    <option value="45">45 Minutes</option>
                    <option value="50">50 Minutes</option>
                    <option value="55">55 Minutes</option>      
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
            </div>
        )
     }
   }

export default FormContainer;