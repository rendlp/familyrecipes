import React, {useContext} from 'react';
import { AuthContext } from '../../lib/auth'
import Name from './Name';
import Prep from './Prep';
import Directions from './Directions';
import Ingredient from './Ingredient'
import { BrowserRouter as Router, Link } from 'react-router-dom'

// import IngredientList from './IngredientList'
// import TheStuff from './TheStuff'
// import {addRecipe} from '../../actions/actions'
// import Header from '../header'
// import Footer from '../footer'
// import {uploadPhoto} from './uploadPhoto';

function UploadParentFunctional () {

    const { user } = useContext(AuthContext)

    const forms = {
        username: {user},
        ingredient: {
            list: []
        },
    };

    function manageForm(ctx, payload) {
        console.log('updating', ctx, payload);
        forms[ctx] = {...payload};
    };

    function handleForm(e) {
        e.preventDefault();
        console.log(forms);

        addRecipe(forms)

    };

    return (
     <div className="uploadDiv">
        <button><Link to='/'>Back</Link></button>

        <div id="name/prep">
            <Name manageForm={manageForm} formData={forms.RecipeName} />
            {/* <uploadPhoto manageForm  ={manageForm} formData={forms.RecipePhoto} /> */}
            <Prep manageForm={manageForm} formData={forms.PrepTime} />
        </div>

            {/* <TheStuff manageForm={manageForm} formData={forms.Ingredients} /> */}
        <div className="ingredients">
            <h1 className=''>Ingredients</h1>
            <Ingredient manageForm={manageForm} formData={forms.ingredient} />
            {/* <IngredientList manageForm={manageIngredients} formData={ingredientList} /> */}
        </div>
        
        <div id="text-directions">
            <Directions manageForm={manageForm} formData={forms.Directions} />
        </div>

        <form onSubmit={handleForm}>
         <button>Submit</button>
        </form>
     </div>
    )
};

export default UploadParentFunctional;
