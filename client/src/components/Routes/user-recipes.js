import React, { useEffect, useContext } from 'react'
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
  },)

  return (
      <div>
        <Header />
        <LogoutButton />
        { props.userRecipes.map(recipe => (
          <p>{recipe.name}</p>
        ))}
        <Footer />
      </div>
    )
}

function mapStateToProps(appState) {
  return {
    userRecipes: appState.userRecipes,
  }
}

export default connect(mapStateToProps)(UserRecipe)
