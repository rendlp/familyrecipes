import React, { useEffect, useContext, useState } from 'react'
import { AuthContext } from "../../lib/auth"
import Header from '../header'
import Footer from '../footer'
import { getCurrentRecipe, shareRecipeWithGroup } from '../../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const RecipeBookRecipeView = (props) => {

  const { user } = useContext(AuthContext)
  const recipeId = props.match.params.recipe_id
  const recipeName = props.currentRecipe.name
  const recipebookID = props.match.params.recipebook_id

  useEffect(() => {
      getCurrentRecipe(recipeId)
  },[])
  const groups = useSelector(appstate => appstate.groups)
  const [groupChosen, setGroupChosen] = useState('')

  return (
    
    <div>
      <Header />

      <div className='divHeader'>
      <Link to={`/user_fav_recipes/recipebook/` + recipebookID}><FontAwesomeIcon className='faBack' icon="arrow-left" /></Link>
      <div className='space'></div>
      <h1 className="recipe-name">{props.currentRecipe.name == null ? "Unnamed Recipe" : props.currentRecipe.name}</h1>
      </div>

        <div className="recipeContainer">
          <img className="recipe-pic" src={props.currentRecipe.imgURL} alt='' />

          <div className='recipe-display'>

              <div className="prep">
                <h2 className="prep-header">Prep</h2>
                <p className="prep-hours">Hours: {props.currentRecipe.prepHours}</p>
                <p className="prep-minutes">Minutes: {props.currentRecipe.prepMinutes}</p>
                <p className='servings'>Servings: {props.currentRecipe.servings}</p>
              </div>
              <div className="ingredients">
                <h2 className="prep-header">Ingredients</h2>
                <ul className="ingredients-contentUL">
                  {props.ingredients.map((ingredient, i) => (
                    <li className='ingredients-contentLI' key={'ingredient'+i}>{ingredient}</li>
                  ))}
           </ul>
              </div>
              
              <div className="directions">
                <h2 className="directions-header">Directions</h2>
                <p className="recipe-directions">{props.currentRecipe.directions == null ? "Directions Not Included With Recipe" : props.currentRecipe.directions}
                </p>
              </div>
        </div>
        </div>

        <label className='shareLabel'>
          Share recipe with a group:
        </label>
        <select onChange={e => setGroupChosen(e.target.value)}
          name="shareWithGroup"
          id="shareWithGroup"
          className="shareDropdown">

          <option value=''>Select a group</option>

          {groups.map((group, i) => (
           <option value={group.group_id} key={"group - "+i}>{group.groupname}</option>
              
          ))}
          
        </select>
        <div className='invisible'></div>

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

export default connect(mapStateToProps)(RecipeBookRecipeView)
