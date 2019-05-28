import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import Header from '../header'
import Footer from '../footer'
import { getRecipesWithinRecipebooks, getCurrentRecipeBook } from '../../actions/actions'
// import { AuthContext } from "../../lib/auth"
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import nettles from '../assets/nettle.jpg'


const RecipeBookView = (props) => {

  // const { user } = useContext(AuthContext)

  const recipebookID = props.match.params.recipebook_id

  const userRecipes = useSelector(appstate => appstate.addedRecipesInsideRecipebooks)

  const currentRecipeBook = useSelector(appstate => appstate.currentRecipeBook)

  useEffect( () => {
      getRecipesWithinRecipebooks(recipebookID)
      getCurrentRecipeBook(recipebookID)

  }, [recipebookID])

console.log(currentRecipeBook)

  return (
    <div className='userRecipeContainer'>
      <Header />

      <div className='divHeader2'>
       <Link to='/'><FontAwesomeIcon className='faBack' icon="arrow-left" /></Link>
       <div className='space'></div>
       <h1 className='recipe-name'>{currentRecipeBook.recipebook_name}</h1>
      </div>

      <div className='userRecipeDiv'>
       <div className='recipeDiv'>

      {props.addedRecipesInsideRecipebooks.map((recipe,i) => (

        <Link key={'recipe - '+i} className='recipeLink' to={`/user_fav_recipes/recipebook/${recipebookID}/${recipe.recipe_id}`}>

        <div className='recipeListP'>
        <h2 className='recipe-view-h2'>{recipe.name == null ? "Unnamed Recipe" : recipe.name}</h2>
        <img className='recipeImgThumbnail' src={ recipe.imgURL || nettles } alt='' />

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
