import React, {useContext} from 'react';
import { AuthContext } from '../../lib/auth'
import Name from './Name';
import Prep from './Prep';
import Directions from './Directions';
import Ingredient from './Ingredient'
import IngredientList from './IngredientList'
import TheStuff from './TheStuff'
import {addRecipe} from '../../actions/actions'
import Header from '../header'
import Footer from '../footer'

function UploadParentFunctional () {
    // const styler = {
    //     width: '30%',
    //     display: 'inline-block'
    // };

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

    };

    return (
        <div>

          <Header />

                <Name manageForm={manageForm} formData={forms.RecipeName} />

                <Prep manageForm={manageForm} formData={forms.PrepTime} />

                {/* <TheStuff manageForm={manageForm} formData={forms.Ingredients} /> */}

                <Ingredient manageForm={manageForm} formData={forms.ingredient} />
                {/* <IngredientList manageForm={manageIngredients} formData={ingredientList} /> */}

                <Directions manageForm={manageForm} formData={forms.Directions} />

                <form onSubmit={handleForm}>
                    <button>Submit</button>
                </form>

            <Footer />


        </div>
    )
};

export default UploadParentFunctional;
