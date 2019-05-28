import React, { useEffect, useContext, useState } from 'react'
import { AuthContext } from "../../lib/auth"
import Header from '../header'
import Footer from '../footer'
import { getCurrentRecipe, getGroups, shareRecipeWithGroup } from '../../actions/actions'
import { connect, useSelector } from 'react-redux'


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
        <div className="recipe-display">
          <img className="recipe-pic" src="http://place-hold.it/400/400" alt=''/>

              <h1 className="recipe-name">{props.currentRecipe.name}</h1>
              <div className="prep">
                <h2 className="prep-header">Prep Time</h2>
                <p className="prep-hours">Hours: {props.currentRecipe.prepHours}</p>
                <p className="prep-minutes">Minutes: {props.currentRecipe.prepMinutes}</p>
              </div>
              <div className="ingredients">
                <h2 className="ingredients-header">Ingredients</h2>
                <ul className="ingredients-content">
                  {props.ingredients.map((ingredient, i) => (
                    <li key={'ingredient'+i}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="directions">
                <h2 className="directions-header">Directions</h2>
                <p className="recipe-directions">{props.currentRecipe.directions}</p>
              </div>
        </div>


        <div className="shareRecipeWithGroup">
          <form onSubmit={handleSubmit}>
            <label>
              Share recipe with a group:
            </label>
            <select onChange={e => setGroupChosen(e.target.value)}
              name="shareWithGroup"
              className="shareWithGroup"
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
