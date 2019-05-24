import React, { useEffect, useContext, useState } from 'react'
import { AuthContext } from "../../lib/auth"
import Header from '../header'
import Footer from '../footer'
import { getCurrentRecipe, getGroups, shareRecipeWithGroup, addFavoriteRecipe } from '../../actions/actions'
import { connect, useSelector } from 'react-redux'
import GroupList from './GroupList';
import RecipeView from './recipe-view'


const DisplayRecipe = (props) => {

  const { user } = useContext(AuthContext)
  const recipeId = props.match.params.recipe_id
  const [groupChosen, setGroupChosen] = useState('')
  const recipeName = props.currentRecipe.name
  const groups = useSelector(appstate => appstate.groups)
  const recipebookID = props.match.params.recipebook_id

  useEffect(() => {
      getCurrentRecipe(recipeId)
      getGroups(user)
  },[])

  function handleSubmit(e) {
    e.preventDefault();
    shareRecipeWithGroup(recipeId, groupChosen, recipeName)

  };

  return (
    <div>
      <Header />
        <div id="recipe-display">
          <img id="recipe-pic" src="http://place-hold.it/400/400" alt=''/>

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
            <button className='abutton' type="submit">
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

export default connect(mapStateToProps)(DisplayRecipe)
