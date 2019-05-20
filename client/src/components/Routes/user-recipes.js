import React, { useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'
import Header from '../header'
import Footer from '../footer'
import LogoutButton from '../logout-button'
import { getUserRecipes } from '../../actions/actions'
import { AuthContext } from "../../lib/auth"
import { connect } from 'react-redux'


const UserRecipe = (props) => {

  const { user } = useContext(AuthContext)

  useEffect( () => {
      getUserRecipes(user)

  }, [])

  

  return (
      <div>
        <Header />
        <LogoutButton />
        {props.userRecipes.map(recipe => (
          <Link to={'user_recipes/' + recipe.recipe_id}><p>{recipe.name}</p></Link>
        ))}
        <Footer />
      </div>
  )
}

function mapStateToProps(appState) {
  return {
    userRecipes: appState.userRecipes,
    userRecipeIDs: appState.userRecipeIDs
  }
}

export default connect(mapStateToProps)(UserRecipe)
