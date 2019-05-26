import React, { useEffect, useContext, useState } from 'react'
import { AuthContext } from "../../lib/auth"
import Header from '../header'
import Footer from '../footer'
import { getCurrentRecipe, getGroups, shareRecipeWithGroup, addFavoriteRecipe } from '../../actions/actions'
import { connect, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

  function handleSubmit(e) {
    e.preventDefault();
    shareRecipeWithGroup(recipeId, groupChosen, recipeName)

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
    <img className="recipe-pic" src={props.currentRecipe.imgURL || 'https://via.placeholder.com/400'} alt='' />
        <div className="recipe-display">
        <div className="prep">
          <h2 className="prep-header">Prep</h2>
          <p className="prep-hours">Hours: <p>{props.currentRecipe.prepHours}</p></p>
          <p className="prep-minutes">Minutes: <p>{props.currentRecipe.prepMinutes}</p></p>
          <p className='prep-servings'>Servings: <p>{props.currentRecipe.servings}</p></p>

        </div>
        <div className="ingredients">
          <h2 className="ingredients-header">Ingredients</h2>
          <ul className="ingredients-contentUL">
            {props.ingredients.map((ingredient, i) => (
              <li className='ingredients-contentLI'key={'ingredient'+i}>{ingredient}</li>
            ))}
          </ul>
        </div>
    
        <div className="directions">
         <h2 className="directions-header">Directions</h2>
         <p className="recipe-directions">{props.currentRecipe.directions == null ? "No Directions Included With Recipe" : props.currentRecipe.directions}</p>
        </div>
   </div>
  </div>           
           
{/* BUTTONS */}

  <div className="shareDiv">
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
