import React, { useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'
import Header from '../header'
import Footer from '../footer'
import LogoutButton from '../logout-button'
import { getRecipesWithinRecipebooks } from '../../actions/actions'
import { AuthContext } from "../../lib/auth"
import { connect } from 'react-redux'


const RecipeBookView = (props) => {

  const { user } = useContext(AuthContext)

  const recipebookID = props.match.params.recipebook_id
  const recipeId = props.match.params.recipe_id

  useEffect( () => {
      getRecipesWithinRecipebooks(recipebookID)

  }, [])



  return (
    <div>
      <Header />
      <LogoutButton />
      {props.addedRecipesInsideRecipebooks.map(recipes => (
        <ul>
          <Link to={`/user_fav_recipes/recipebook/:${recipebookID}/:${recipeId} + recipes.recipe_id`}><li>{recipes.recipe_name}</li></Link>
        </ul>
      ))}
      <Footer />
    </div>

  )
}

function mapStateToProps(appState) {
  return {
    addedRecipesInsideRecipebooks: appState.addedRecipesInsideRecipebooks
  }
}

export default connect(mapStateToProps)(RecipeBookView)
