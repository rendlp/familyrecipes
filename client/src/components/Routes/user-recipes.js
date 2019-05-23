import React, { useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'
import Header from '../header'
import Footer from '../footer'
import { getUserRecipes } from '../../actions/actions'
import { AuthContext } from "../../lib/auth"
import { connect } from 'react-redux'


const UserRecipe = (props) => {

  const { user } = useContext(AuthContext)

  useEffect( () => {
      getUserRecipes(user)

  }, [user])



  return (
      <div>
        <Header />
        
        <Link to='/'><button className='backBtn'>Back</button></Link>
        {props.userRecipes.map((recipe,i) => (
          <Link key={'recipe'+i} to={'user_recipes/' + recipe.recipe_id}><p>{recipe.name}</p></Link>
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
