import React, { useEffect, useContext } from 'react'
import { AuthContext } from "../../lib/auth"
import Header from '../header'
import Footer from '../footer'
import { getCurrentRecipe, getGroups, addFavoriteRecipe } from '../../actions/actions'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import nettles from '../assets/nettle.jpg'


const GroupRecipeView = (props) => {
  const { user } = useContext(AuthContext)

  const recipeId = props.match.params.recipe_id

  const recipeName = props.currentRecipe.name

  const currentGroupId = useSelector(appstate => appstate.currentGroupId)

  console.log(currentGroupId)

  function backFunction(e) {
    e.preventDefault()
    props.history.goBack()

}

  useEffect(() => {
      getCurrentRecipe(recipeId)
      getGroups(user)
  },[])

  function handleClick(e) {
  addFavoriteRecipe(props.currentRecipe.name, recipeId, user )
  }


  console.log( 'recipeId - ',recipeId, 'groupChosen - ', 'recipeName - ', recipeName)



  return (
    <div>

    <Header />
    <div className='divHeader'>
    <div onClick={backFunction}><FontAwesomeIcon className='faBack' icon="arrow-left" /></div>
    <div className='space'></div>
     <h1 className="recipe-name">{recipeName == null ? "Unnamed Recipe" : recipeName}</h1>
    </div>
    <div className='recipeContainer'>
    <div>
    <img className="recipe-pic" src={props.currentRecipe.imgURL || {nettles}} alt='' />
    </div>
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
                <p className="recipe-directions">{props.currentRecipe.directions == null ? "Directions Not Included With Recipe" : props.currentRecipe.directions}</p>

              </div>
        </div>
        </div>

        <div className="shareDiv">
       

{/* BUTTONS */}
            <div className='recipeButtonDiv'>
    
            <div className='space'></div>
       
            <div className='space'></div>
            <button className='abutton' onClick={handleClick}>Add to Favorite List</button>
            </div>
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
