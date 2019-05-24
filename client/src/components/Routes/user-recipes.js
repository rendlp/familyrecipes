import React, { useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'
import Header from '../header'
import Footer from '../footer'
import { getUserRecipes } from '../../actions/actions'
import { AuthContext } from "../../lib/auth"
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faArrowLeft)


const UserRecipe = (props) => {

  const { user } = useContext(AuthContext)

  useEffect( () => {
      getUserRecipes(user)

  }, [user])



  return (
      <div className='userRecipeContainer'>
        <Header />

        <div className='divHeader'>
        <Link to='/'><FontAwesomeIcon className='faBack' icon="arrow-left" /></Link>
        <div className='space'></div>
        <h1 className='recipe-name'>Recipes</h1>
        </div>
        <div className='userRecipeDiv'>
         <div className='recipeDiv'>
  
        {props.userRecipes.map((recipe, i) => (
          <Link className='recipeLink'key={'recipe'+i} to={'user_recipes/' + recipe.recipe_id}>
            <div className='recipeListP'>{recipe.name == null ? "Unnamed Recipe" : recipe.name}
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
    userRecipes: appState.userRecipes,
    userRecipeIDs: appState.userRecipeIDs
  }
}

export default connect(mapStateToProps)(UserRecipe)
