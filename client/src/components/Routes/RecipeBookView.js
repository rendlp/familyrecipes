import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import Header from '../header'
import Footer from '../footer'
import { getRecipesWithinRecipebooks } from '../../actions/actions'
// import { AuthContext } from "../../lib/auth"
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RecipeBookView = (props) => {

  // const { user } = useContext(AuthContext)

  const recipebookID = props.match.params.recipebook_id

  useEffect( () => {
      getRecipesWithinRecipebooks(recipebookID)

  }, [recipebookID])

console.log(props.addedRecipesInsideRecipebooks)

  return (
    <div>
      <Header />
      <Link to='/'><FontAwesomeIcon className='faBack' icon="arrow-left" /></Link>
      {props.addedRecipesInsideRecipebooks.map(recipe => (

        <ul className='groupUL'>
          <Link to={`/user_fav_recipes/recipebook/${recipebookID}/${recipe.recipe_id}`}><li>{recipe.recipe_name == null ? "Unnamed Recipe" : recipe.recipe_name}</li></Link>

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
