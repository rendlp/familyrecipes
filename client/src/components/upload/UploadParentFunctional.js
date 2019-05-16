import React, {useContext} from 'react';
import { AuthContext } from '../../lib/auth'
import Name from './Name';
import Prep from './Prep';
import Directions from './Directions';
import Ingredient from './Ingredient'
import IngredientList from './IngredientList'
import TheStuff from './TheStuff'
import {addRecipe} from '../../actions/actions'

function UploadParentFunctional () {
    // const styler = {
    //     width: '30%',
    //     display: 'inline-block'
    // };

    const { user } = useContext(AuthContext)
    
    const forms = {
        username: {user}
        
    };

    

    // const ingredientList = []
 

    function manageForm(ctx, payload) {
        console.log('updating', ctx, payload);
        
        forms[ctx] = {...payload};
    };

    // function manageIngredients(ctx, payload) {
    //     console.log('updating', ctx, payload)

    //     ingredientList[ctx] = {...payload}
    // }

    function handleForm(e) {
        e.preventDefault();
        console.log(forms);
        
    };

    return (
        <div>
           
                <Name manageForm={manageForm} formData={forms.RecipeName} />
            
                <Prep manageForm={manageForm} formData={forms.PrepTime} />

                <TheStuff manageForm={manageForm} formData={forms.Ingredients} />
            
                {/* <Ingredient />
                <IngredientList manageForm={manageIngredients} formData={ingredientList} /> */}
            
                <Directions manageForm={manageForm} formData={forms.Directions} />
            
            <form onSubmit={handleForm}>
                <button>Submit</button>
            </form>
        </div>
    )
};

export default UploadParentFunctional;
