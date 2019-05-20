import React, { useEffect, useContext, useState } from 'react'
import { AuthContext } from "../../lib/auth"
import Header from '../header'
import Footer from '../footer'
import { getCurrentRecipe, getGroups, shareRecipeWithGroup, addFavoriteRecipe } from '../../actions/actions'
import { connect } from 'react-redux'

const GroupRecipeView = (props) => {
  const { user } = useContext(AuthContext)

  const recipeId = props.match.params.recipe_id

  const recipeName = props.currentRecipe.name

  function handleClick(e) {
  addFavoriteRecipe(props.currentRecipe.name, recipeId, user )
}

  useEffect(() => {
      getCurrentRecipe(recipeId)
  },[])

  return (
    <div>
      <Header />
        <div id="recipe-display">
          <img id="recipe-pic" src="http://place-hold.it/400/400" />

              <h1 id="recipe-name">{recipeName}</h1>
              <div id="prep">
                <h2 id="prep-header">Prep Time</h2>
                <p id="prep-hours">Hours: {props.currentRecipe.prepHours}</p>
                <p id="prep-minutes">Minutes: {props.currentRecipe.prepMinutes}</p>
              </div>
              <div id="ingredients">
                <h2 id="ingredients-header">Ingredients</h2>
                <ul id="ingredients-content">
                  {props.ingredients.map((ingredient, i) => (
                    <li key={'ingredient'+i}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div id="directions">
                <h2 id="directions-header">Directions</h2>
                <p id="recipe-directions">{props.currentRecipe.directions}</p>
              </div>
              <button onClick={handleClick}>Add to Favorite List</button>
        </div>
      <Footer />

    </div>
  )
}

function mapStateToProps(appState) {
  return {
    currentRecipe: appState.currentRecipe,
    ingredients: appState.currentRecipeIngredients
  }
}

export default connect(mapStateToProps)(GroupRecipeView)
