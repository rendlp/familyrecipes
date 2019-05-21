import React, { useEffect, useContext, useState } from 'react'
import { AuthContext } from "../../lib/auth"
import Header from '../header'
import Footer from '../footer'
import { getCurrentRecipe, getGroups, shareRecipeWithGroup, addFavoriteRecipe } from '../../actions/actions'
import { connect, useSelector } from 'react-redux'
import GroupList from './GroupList';
import { BrowserRouter as Route, Link } from 'react-router-dom'


const RecipeView = (props) => {


  const { user } = useContext(AuthContext)

  const recipeId = props.match.params.recipe_id

  const recipeName = props.currentRecipe.name

  useEffect(() => {
      getCurrentRecipe(recipeId)
      getGroups(user)
  },[])

  function handleClick(e) {
  addFavoriteRecipe(props.currentRecipe.name, recipeId, user )
  }

  const groups = useSelector(appstate => appstate.groups)

  const [groupChosen, setGroupChosen] = useState('')

  // console.log( 'recipeId - ',recipeId, 'groupChosen - ', groupChosen, 'recipeName - ', recipeName)

  function handleSubmit(e) {
    e.preventDefault();
    shareRecipeWithGroup(recipeId, groupChosen, recipeName)

  };

  return (
    <div>
      <Header />
      <button><Link to='/'>Back</Link></button>
        <div id="recipe-display">
          <img id="recipe-pic" src="http://place-hold.it/400/400" alt='' />

              <h1 id="recipe-name">{props.currentRecipe.name}</h1>
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
        <div className="shareRecipeWithGroup">
          <form onSubmit={handleSubmit}>
            <label>
              Share recipe with a group:
            </label>
            <select onChange={e => setGroupChosen(e.target.value)}
              name="shareWithGroup"
              id="shareWithGroup"
              className="shareDropdown">
              {groups.map((group, i) => (
                <option value={group.group_id} key={"group - "+i}>
                  {group.groupname}
                </option>
              ))}
            </select>
            <button type="submit">
                Share
            </button>
          </form>
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

export default connect(mapStateToProps)(RecipeView)
