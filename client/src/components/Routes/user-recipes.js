import React, { Component } from 'react'
import Header from '../header'
import Footer from '../footer'
import LogoutButton from '../logout-button'
import { getRecipes } from '../../actions/actions'

class UserRecipe extends Component {



  render() {
    return (
      <div>
        <Header />
        <LogoutButton />
          <p>This page should render a user's recipe list</p>
        <Footer />
      </div>
    )
  }
}
export default UserRecipe
