import React, { Component } from 'react'
import Header from '../header'
import Footer from '../footer'
import LogoutButton from '../logout-button'

class UserFavRecipes extends Component {
  render() {
    return (
      <div>
        <Header />
        <LogoutButton />
          <p>This page should render a user's list of favorite recipes and recipebooks</p>
        <Footer />
      </div>
    )
  }
}

export default UserFavRecipes
