import React, {useContext, useState} from 'react';
import { AuthContext } from '../../lib/auth'
import Name from './Name';
import Prep from './Prep';
import Directions from './Directions';
import Ingredient from './Ingredient'
import { Link } from 'react-router-dom'
import {addRecipe} from '../../actions/actions'
// import IngredientList from './IngredientList'
import Header from '../header'
import Footer from '../footer'
import ImageUpload from './ImageUpload';
import { withRouter } from 'react-router-dom'

function UploadParentFunctional (props) {

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


    // on form submit
    function handleForm(e) {
        e.preventDefault();
        addRecipe(forms);
        props.history.push('/user_recipes');
    };



    return (
      <div>
        <Header />
        <div className="uploadDiv">

         {/*}<Link to='/'><button className='abutton'>Back</button></Link>*/}


        <div id="column1">
          <Name manageForm={manageForm} formData={forms.RecipeName} />
          <Prep manageForm={manageForm} formData={forms.PrepTime} />
          <h1 className=''>Ingredients</h1>
          <Ingredient manageForm={manageForm} formData={forms.ingredient} />
        </div>

          <Directions manageForm={manageForm} formData={forms.Directions} />


            {/* <IngredientList manageForm={manageIngredients} formData={ingredientList} /> */}


        <div id="image-upload">
            <h1>Image</h1>
            <ImageUpload addImageToForm={addImageToForm} manageForm={manageForm} formData={forms.image} />
        </div>

      </div>

      <div id ="formButton">
        <form onSubmit={handleForm}>
          < button className='abutton'>Submit</button>
        </form>
      </div>

      <Footer />
     </div>
    )
};

export default withRouter(UploadParentFunctional);
