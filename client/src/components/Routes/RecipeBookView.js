import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import Header from '../header'
import Footer from '../footer'
import { getRecipesWithinRecipebooks } from '../../actions/actions'
// import { AuthContext } from "../../lib/auth"
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const RecipeBookView = (props) => {

  // const { user } = useContext(AuthContext)

  const recipebookID = props.match.params.recipebook_id

  const userRecipes = useSelector(appstate => appstate.addedRecipesInsideRecipebooks)

  useEffect( () => {
      getRecipesWithinRecipebooks(recipebookID)

  }, [recipebookID])

console.log(props.addedRecipesInsideRecipebooks)

  return (
    <div className='userRecipeContainer'>
      <Header />

      <div className='divHeader2'>
       <Link to='/'><FontAwesomeIcon className='faBack' icon="arrow-left" /></Link>
       <div className='space'></div>
       <h1 className='recipe-name'>book name</h1>
      </div>

      <div className='userRecipeDiv'>
       <div className='recipeDiv'>

       {props.addedRecipesInsideRecipebooks.map(recipe => (

      <Link className='recipeLink' to={`/user_fav_recipes/recipebook/${recipebookID}/${recipe.recipe_id}`}>
        <div className='recipeListP'>{recipe.recipe_name == null ? "Unnamed Recipe" : recipe.recipe_name}
        <img src={recipe.imgURL || 'https://via.placeholder.com/200'} alt='' />
        </div>
      </Link>

      ))}
       </div>
       </div>
      <Footer />
    </div>
  )
}

function mapStateToProps(appState) {
  return {
    addedRecipesInsideRecipebooks: appState.addedRecipesInsideRecipebooks
  }
}

export default connect(mapStateToProps)(RecipeBookView)
