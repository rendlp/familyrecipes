import React, {useContext, useState} from 'react';
import { AuthContext } from '../../lib/auth'
import Name from './Name';
import Prep from './Prep';
import Directions from './Directions';
import Ingredient from './Ingredient'
import { Link, withRouter } from 'react-router-dom'
import {addRecipe} from '../../actions/actions'
import IngredientList from './IngredientList'
import Header from '../header'
import Footer from '../footer'
import ImageUpload from './ImageUpload';

function UploadParentFunctional (props) {

  const { user } = useContext(AuthContext)

  const forms = {
        username: {user},
        ingredient: {
          list: []
        },
        image: ""
  };



    const [nameError, setNameError] = useState('')
    const [ingredientsError, setIngredientsError] = useState('')
    const [directionsError, setDirectionsError] = useState('')




    function manageForm(ctx, payload) {
        // console.log('updating', ctx, payload);
        forms[ctx] = {...payload};
        console.log('payload:', payload)
    };

    function addImageToForm(img) {
      forms.image = img
    }


    // on form submit
    function handleForm() {
        // e.preventDefault();
        addRecipe(forms);
        props.history.push('/user_recipes');
    };

    // form validation
    function validator(e) {
      e.preventDefault()
      let valid = true

      // if the recipe being submitted has been named, validate form
      if (forms.name) {
        if (forms.name.name === '' || forms.name.name === undefined) {
            valid = false
            setNameError('Recipe Name Cannot Be Blank')
        } else if (forms.name.name.length > 0) {

          setNameError("")
          valid = true
        }
      } else {
        forms.name = ''
        valid = false
      }

      if (forms.directions) {
        setDirectionsError('')
        if (forms.directions.directions === '' || forms.directions.directions === undefined) {
          valid = false
          setDirectionsError('Please Include Directions With Your Recipe')
        } else {
          setDirectionsError('')

        }
      } else {
        forms.directions = ""
        valid = false
      }


      // if at least 1 ingredient has been submitted, validate form
      if (forms.ingredient.list.length === 0 || forms.ingredient.list.length === undefined) {
        valid = false
        setIngredientsError('Please Include At Least One Ingredient')
      } else {
        setIngredientsError('')
      }
        // console.log('directions =', forms.directions)
        // console.log('name =', forms.name)
        // console.log('ingredients =', forms.ingredient.list)
        console.log('validation =', valid)
        // console.log(forms)

      if (valid === true) {
        handleForm()
      }
    }

    return (
     <div className="uploadDiv">

        <button className='backBtn'><Link to='/'>Back</Link></button>

        <div id="name/prep">
            <label>{nameError}</label>
            <Name manageForm={manageForm} formData={forms.RecipeName} />
            <Prep manageForm={manageForm} formData={forms.PrepTime} />
        </div>


        <div className="ingredients">
            <label>{ingredientsError}</label>
            <h1 className=''>Ingredients</h1>
            <Ingredient manageForm={manageForm} formData={forms.ingredient} />
            {/* <IngredientList manageForm={manageIngredients} formData={ingredientList} /> */}
        </div>

        <div id="text-directions">
            <label>{directionsError}</label>
            <Directions manageForm={manageForm} formData={forms.Directions} />
        </div>
        <div id="image-upload">
            <h1>Image</h1>
            <ImageUpload addImageToForm={addImageToForm} manageForm={manageForm} formData={forms.image} />
            <form onSubmit={validator}>
              <button className='submitButton'>Submit</button>
            </form>
        </div>


     </div>
    )
};

export default withRouter(UploadParentFunctional);
