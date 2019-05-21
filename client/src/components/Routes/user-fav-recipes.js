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

  }, [user])

  const userFavorites = useSelector(appstate => appstate.userFavorites)


    console.log(props.userRecipeBooks)


    return (
      <div>
        <Header />
        <LogoutButton />
        <div>
          <h3>{`${user}'s Favorite Recipes:`}</h3>
            <ul>

              {props.userFavorites.map((recipe, i) => (
                  <li key={'recipe' + i}>
                    <Link
                      to={`/user_fav_recipes/` + recipe.recipe_id}>
                      {recipe.name}
                    </Link>
                  </li>
              ))}
            </ul>
        <h3>{`${user}'s Recipe Books:`}</h3>
        <ul>
          {props.userRecipeBooks.map((recipebook, i) => (
            <li key={'recipebook' + i}>
              <Link
                      to={`/user_fav_recipes/recipebook/` + recipebook.recipebook_id}>
                      {recipebook.recipebook_name}
              </Link>
            </li>
          ))}
        </ul>
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
