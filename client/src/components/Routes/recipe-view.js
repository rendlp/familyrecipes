import React, { useEffect, useContext } from 'react'
import {useSelector} from 'react-redux'
import { AuthContext } from "../../lib/auth"
import Header from '../header'
import Footer from '../footer'
import {getUserRecipes} from '../../actions/actions'
import { connect } from 'react-redux'

const RecipeView = (props) => {

  // variable holding which user is logged in
  const { user } = useContext(AuthContext)
  // variable holding the recipe ID in the url link
  const recipeId = props.match.params.recipe_id

  console.log('recipe - ',recipeId)
  // hooks function that holds lifestyle methods(componentWillMount)
  useEffect(() => {
      getUserRecipes(user)
  },[])

  const CurrentRecipe = props.userRecipes.filter(recipe => recipe.recipe_id == recipeId)

  console.log(CurrentRecipe)

  return (
    <div>
      <Header />
        <div id="recipeCanvas">
          <img id="recipe-pic" src="http://place-hold.it/400/400" />
          {CurrentRecipe
          .map(recipe => (
            <div>
              <h1 id="recipe-name">{recipe.name}</h1>
              <div id="prep">
                <p id="prep-header">Prep Time</p>
                <p id="prep-hours">Hours: {recipe.prepHours}</p>
                <p id="prep-minutes">Minutes: {recipe.prepMinutes}</p>
              </div>
              <div id="ingredients">
                <p id="ingredients-header">Ingredients</p>
              </div>
              <div id="directions">
                <h1 id="directions-header">Directions</h1>
                <h1 id="recipe-directions">{recipe.directions}</h1>
              </div>
            </div>
          ))}

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

export default connect(mapStateToProps)(RecipeView)
