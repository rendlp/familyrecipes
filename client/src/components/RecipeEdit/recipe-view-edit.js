import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
// import Header from '../../header'
// import Footer from '../../footer'
import  { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { AuthContext } from "../../lib/auth"
import EditName from './recipe-edit-name'
import EditPrep from './recipe-edit-prep'
import EditDirections from './recipe-edit-directions'
import EditIngredient from './recipe-edit-ingredients'
import EditImageUpload from './recipe-edit-image-upload'
// import { editRecipe } from '../../actions/actions'

const RecipeViewEdit = props => {

const recipeId = props.match.params.recipe_id

const { user } = useContext(AuthContext)

  const forms = {
        username: {user},
        ingredient: {
          list: []
        },
        image: ""
  };

  function manageForm(ctx, payload) {
    // console.log('updating', ctx, payload);
    forms[ctx] = {...payload};
};

function addImageToForm(img) {
  forms.image = img
}


//on form submit
function handleForm(e) {
    e.preventDefault();
    // addRecipe(forms);
    props.history.push('/user_recipes');
};

return (

    <div className="uploadDiv">
    
        <Link to='/'><button className='abutton'>Back</button></Link>


       <div id="name/prep">

           <EditName manageForm={manageForm} formData={forms.RecipeName} />
           <EditPrep manageForm={manageForm} formData={forms.PrepTime} />
       </div>


       <div className="ingredients">

           <h1 className=''>Ingredients</h1>
           <EditIngredient manageForm={manageForm} formData={forms.ingredient} />
          
       </div>

       <div id="text-directions">

           <EditDirections manageForm={manageForm} formData={forms.Directions} />
       </div>
       <div id="image-upload">
           <h1>Image</h1>
           <EditImageUpload addImageToForm={addImageToForm} manageForm={manageForm} formData={forms.image} />
           <form onSubmit={handleForm}>

        <button className='abutton'>Submit</button>
       </form>

       </div>


    </div>
   )
}

export default withRouter(RecipeViewEdit)