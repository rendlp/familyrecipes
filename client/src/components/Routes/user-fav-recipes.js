import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {AuthContext} from '../../lib/auth'
import { connect } from 'react-redux'
import {getUserFavorites} from '../../actions/actions'
import {getRecipeBooks} from '../../actions/actions'
import Header from '../header'
import Footer from '../footer'
import LogoutButton from '../logout-button'
import {Link} from 'react-router-dom'



const UserFavRecipes = (props) => {

  const { user } = useContext(AuthContext)

  useEffect( () => {
      getUserFavorites(user)
      getRecipeBooks(user)

  }, [])

  function handleClick(e) {
    console.log('route user to a recipebook creation page')
  }



  const userFavorites = useSelector(appstate => appstate.userFavorites)




    return (
      <div>
        <Header />
        <LogoutButton />
        <div>
        {props.userFavorites.map((recipes, i) => (
            <p key={'recipes' + i}>{recipes.name}</p>
        ))}
        {props.userRecipeBooks.map((recipebooks, i) => (
          <p key={'recipebooks' + i}>{recipebooks.recipebook_name}</p>
        ))}
        </div>

        <div id="createGroupLink">
            <Link to={"/createrecipebook"}>
              <button >Create a RecipeBook</button>
            </Link>
        </div>
        <Footer />
      </div>
    )
}

function mapStateToProps(appState) {
  return {
    userFavorites: appState.userFavorites,
    userRecipeBooks: appState.userRecipeBooks
  }
}

export default connect(mapStateToProps)(UserFavRecipes)
