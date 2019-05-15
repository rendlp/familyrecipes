import React, { Component } from 'react'
import Header from '../header'
import Footer from '../footer'
import LogoutButton from '../logout-button'

class UsermadeRecipeBook extends Component {
  render() {
    return (
      <div>
        <Header />
        <LogoutButton />
          <p>This page should render a single recipebook created by a user using recipes from the user's favorites list</p>
        <Footer />
      </div>
    )
  }
}
export default UsermadeRecipeBook
