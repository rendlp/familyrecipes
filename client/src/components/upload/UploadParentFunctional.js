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
    let image_url = forms.image

    function manageForm(ctx, payload) {
        console.log('updating', ctx, payload);
        forms[ctx] = {...payload};
    };

    function addImageToForm(img) {
      forms.image = img
    }


    // on form submit
    function handleForm() {
        // e.preventDefault();
        console.log(forms);
        addRecipe(forms);
        // props.history.push('/user_recipes');
    };

    // form validation
    function validator(e) {
      e.preventDefault()
      let valid = false

      // if the recipe being submitted has been named, validate form
      if (forms.name.name === '' || forms.name.name === undefined) {
          valid = false
          setNameError('Recipe Name Cannot Be Blank')
      } else {
        valid = true
        setNameError("")
      }
      // if at least 1 ingredient has been submitted, validate form
      if (forms.ingredient.list.length === 0 || forms.ingredient.list.length === undefined) {
        valid = false
        setIngredientsError('Please Include At Least One Ingredient')
      } else {
        valid = true
        setIngredientsError('')
      }
      // If no image uploaded, send a string to database post and validate form.
      // if (image_url === "" || image_url === undefined) {
      //   valid = true
      //   image_url = 'No Pic Added'
      // } else {
      //   valid = true
      // }

      console.log('image url =', image_url)
      console.log('valid', valid)
      if (valid = true) {
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
