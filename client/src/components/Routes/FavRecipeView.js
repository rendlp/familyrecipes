import React, { useEffect, useContext, useState } from 'react'
import { AuthContext } from "../../lib/auth"
import Header from '../header'
import Footer from '../footer'
import { getCurrentRecipe, getRecipeBooks, addRecipeToRecipeBook} from '../../actions/actions'
import { connect, useSelector } from 'react-redux'
import GroupList from './GroupList';



const FavRecipeView = (props) => {


  const { user } = useContext(AuthContext)

  const recipeId = props.match.params.recipe_id

  const recipeName = props.currentRecipe.name

  useEffect(() => {
      getCurrentRecipe(recipeId)
      getRecipeBooks(user)
  },[])

  const userRecipeBooks = useSelector(appstate => appstate.userRecipeBooks)

  // console.log(userRecipeBooks)

  const [recipeBookChosen, setRecipeBookChosen] = useState('')

  // console.log( 'recipeId - ',recipeId, 'recipeBookChosen - ', recipeBookChosen, 'recipeName - ', recipeName)

  function handleSubmit(e) {
    e.preventDefault();
    addRecipeToRecipeBook(recipeId, recipeBookChosen, recipeName)
  };



  return (
    <div>
      <Header />
        <div id="recipe-display">
          <img id="recipe-pic" src={props.currentRecipe.imgURL} alt='' />

              <h1 id="recipe-name">{props.currentRecipe.name == null ? "Unnamed Recipe" : props.currentRecipe.name}</h1>
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
                <p id="recipe-directions">{props.currentRecipe.directions == null ? "Directions Not Included With Recipe" : props.currentRecipe.directions}</p>
              </div>

        </div>
        <div className="shareRecipeWithGroup">
          <form onSubmit={handleSubmit}>
            <label>
              Add recipe to a recipe book:
            </label>
            <select onChange={e => setRecipeBookChosen(e.target.value)}
              name="shareWithGroup"
              id="shareWithGroup"
              className="shareDropdown">
                <option value=''>Select a Recipe Book</option>
                {userRecipeBooks.map((recipeBook, i) => (
                <option value={recipeBook.recipebook_id} key={"group - "+i}>
                  {recipeBook.recipebook_name}
                </option>
              ))}
            </select>

        

            <button
              className={recipeBookChosen === '' ? 'hidden' : 'abutton'}
              type="submit">

                Add
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
    ingredients: appState.currentRecipeIngredients,
    userRecipeBooks: appState.userRecipeBooks
  }
}

export default connect(mapStateToProps)(FavRecipeView)
