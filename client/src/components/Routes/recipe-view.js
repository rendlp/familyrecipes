import React, { useEffect, useContext, useState } from 'react'
import { AuthContext } from "../../lib/auth"
import Header from '../header'
import Footer from '../footer'
import { getCurrentUserOwnedRecipe, getGroups, shareRecipeWithGroup, addFavoriteRecipe } from '../../actions/actions'
import { connect, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import nettles from '../assets/nettle.jpg'

const RecipeView = (props) => {

  const { user } = useContext(AuthContext)
  const recipeId = props.match.params.recipe_id
  const recipeName = props.currentRecipe.name
  const url = props.currentRecipe.imgURL

  useEffect(() => {
      getCurrentUserOwnedRecipe(recipeId, user, props.history)
      getGroups(user)
  },[])

  function handleClick(e) {
  addFavoriteRecipe(props.currentRecipe.name, recipeId, user, url )
  }

  const groups = useSelector(appstate => appstate.groups)
  const [groupChosen, setGroupChosen] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    shareRecipeWithGroup(recipeId, groupChosen, recipeName, url)

  };

  return (
    <div>
    <Header />

    <div className='divHeader'>
    <Link to='/user_recipes'><FontAwesomeIcon className='faBack' icon="arrow-left" /></Link>
    <div className='space'></div>
    <h1 className="recipe-name">{props.currentRecipe.name == null ? 'No Name Added to Recipe' : props.currentRecipe.name}</h1>
    </div>

    <div className='recipeContainer'>
      <div>
    <img className="recipe-pic" src={props.currentRecipe.imgURL || {nettles}} alt='' />
    </div>
        <div className="recipe-display">
          <div className="prep">
            <h2 className="recipe-header">Prep</h2>
            <p className="prep-hours">Hours: {props.currentRecipe.prepHours}</p>
            <p className="prep-minutes">Minutes: {props.currentRecipe.prepMinutes}</p>
            <p className='prep-servings'>Servings: {props.currentRecipe.servings}</p>
          </div>
        </div>
        <div className="ingredients">
          <h2 className="recipe-header">Ingredients</h2>
          <ul className="ingredients-contentUL">
              {props.ingredients.map((ingredient, i) => (
                <li className='ingredients-contentLI'key={'ingredient'+i}>{ingredient}</li>
              ))}
          </ul>
        </div>
        <div className="directions">
         <h2 className="recipe-header">Directions</h2>
         <p className="recipe-directions">{props.currentRecipe.directions == null ? "No Directions Included With Recipe" : props.currentRecipe.directions}</p>
        </div>
      </div>
  {/* BUTTONS */}

      <div className="shareBtnDiv">
        <form onSubmit={handleSubmit}>
          <div className='recipeButtonDiv'>
            <div className='space'></div>
            <div className='space'></div>
            <Link to={`/user_recipes/${recipeId}/edit`}><button className='abutton'>Edit Recipe</button></Link>
            <div className='space'></div>
            <button className='abutton' onClick={handleClick}>Add to Favorite List</button>
          </div>

          <label className='shareLabel'>Share recipe with a group:</label>
          <select onChange={e => setGroupChosen(e.target.value)}
            name="shareWithGroup"
            id="shareWithGroup"
            className="shareDropdown">
            <option value=''>Select a group</option>
            {groups.map((group, i) => (
              <option value={group.group_id} key={"group - "+i}>
                {group.groupname}
            </option>
            ))}
          </select>
          <button className={groupChosen === '' ? 'hidden' : 'abutton'} type="submit">
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
