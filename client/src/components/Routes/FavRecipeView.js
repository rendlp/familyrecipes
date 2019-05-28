import React, { useEffect, useContext, useState } from 'react'
import { AuthContext } from "../../lib/auth"
import Header from '../header'
import Footer from '../footer'
import { getCurrentRecipe, getRecipeBooks, addRecipeToRecipeBook} from '../../actions/actions'
import { connect, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import nettles from '../assets/nettle.jpg'


const FavRecipeView = (props) => {


  const { user } = useContext(AuthContext)

  const recipeId = props.match.params.recipe_id

  const recipeName = props.currentRecipe.name

  const url = props.currentRecipe.imgURL

  useEffect(() => {
      getCurrentRecipe(recipeId)
      getRecipeBooks(user)
  },[])

  const userRecipeBooks = useSelector(appstate => appstate.userRecipeBooks)

  // console.log(userRecipeBooks)

  const [recipeBookChosen, setRecipeBookChosen] = useState('')

  console.log( 'recipeId - ',recipeId, 'recipeBookChosen - ', recipeBookChosen, 'recipeName - ', recipeName, 'url -', url)

  function handleSubmit(e) {
    e.preventDefault();
    addRecipeToRecipeBook(recipeId, recipeBookChosen, recipeName, url)
  };

  return (
    <div>
    <Header />

    <div className='divHeader'>
    <Link to='/user_fav_recipes'><FontAwesomeIcon className='faBack' icon="arrow-left" /></Link>
    <div className='space'></div>
    <h1 className="recipe-name">{props.currentRecipe.name == null ? 'No Name Added to Recipe' : props.currentRecipe.name}</h1>
    </div>

        <div className="recipeContainer">
          <div>
          <img className="recipe-pic" src={props.currentRecipe.imgURL || {nettles}} alt='' />
          </div>
          <div className="recipe-display">
              <div className="prep">
                <h2 className="recipe-header">Prep</h2>
                <p className="prep-hours">Hours: <p>{props.currentRecipe.prepHours}</p></p>
                <p className="prep-minutes">Minutes: <p>{props.currentRecipe.prepMinutes}</p></p>
                <p className="servings">Servings: <p>{props.currentRecipe.servings}</p></p>
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
                <p className="recipe-directions">{props.currentRecipe.directions == null ? "Directions Not Included With Recipe" : props.currentRecipe.directions}</p>
              </div>
              </div>
        </div>

        
       <div className='shareBtnDiv'>
        <div className="shareRecipeWithGroup">

          <form onSubmit={handleSubmit}>
            <label className='shareLabel'>Add Recipe to Book: </label>
            <select onChange={e => setRecipeBookChosen(e.target.value)}
              name="shareWithGroup"
              className="shareDropdown">

                <option value=''>Select a Recipe Book</option>
                {userRecipeBooks.map((recipeBook, i) => (
                <option value={recipeBook.recipebook_id} key={"group - "+i}>
                  {recipeBook.recipebook_name}
                </option>
              ))}
            </select>

            <button
              className={recipeBookChosen === '' ? 'hidden' : 'abutton3'}
              type="submit">
                Add
            </button>
          </form>
        </div>
        <div className='invisible'></div>
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
