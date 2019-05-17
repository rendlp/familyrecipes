import React, {useContext} from 'react';
import { AuthContext } from '../../lib/auth'
import Name from './Name';
import Prep from './Prep';
import Directions from './Directions';
import Ingredient from './Ingredient'
<<<<<<< HEAD
import { BrowserRouter as Router, Link } from 'react-router-dom'

=======
import IngredientList from './IngredientList'
import TheStuff from './TheStuff'
import {addRecipe} from '../../actions/actions'
import Header from '../header'
import Footer from '../footer'
>>>>>>> 6fa22fce838533a78d260d54e7221db2aba56fca

function UploadParentFunctional () {

    const { user } = useContext(AuthContext)

    const forms = {
        username: {user},
        ingredient: {
            list: []
        },
<<<<<<< HEAD
    };

=======

    };






>>>>>>> 6fa22fce838533a78d260d54e7221db2aba56fca
    function manageForm(ctx, payload) {
        console.log('updating', ctx, payload);
        forms[ctx] = {...payload};
    };

<<<<<<< HEAD
    function handleForm(e) {
        e.preventDefault();
        console.log(forms);
    };

    return (
     <div className="uploadDiv">
        <button><Link to='/'>Back</Link></button>

        <div id="name/prep">
            <Name manageForm={manageForm} formData={forms.RecipeName} />
            <Prep manageForm={manageForm} formData={forms.PrepTime} />
        </div>

            {/* <TheStuff manageForm={manageForm} formData={forms.Ingredients} /> */}
        <div className="ingredients">
            <h1 className=''>test</h1>
            <Ingredient manageForm={manageForm} formData={forms.ingredient} />
            {/* <IngredientList manageForm={manageIngredients} formData={ingredientList} /> */}
=======


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


>>>>>>> 6fa22fce838533a78d260d54e7221db2aba56fca
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
