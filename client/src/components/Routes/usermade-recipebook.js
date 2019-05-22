import React, { Component } from 'react'
import Header from '../header'
import Footer from '../footer'
import LogoutButton from '../logout-button'
import { BrowserRouter as Route, Link } from 'react-router-dom'

class UsermadeRecipeBook extends Component {
  render() {
    return (
      <div>
        <Header />
        <Link to='/'><button className='backBtn'>Back</button></Link>
          <p>This page should render a single recipebook created by a user using recipes from the user's favorites list</p>
        <Footer />
      </div>
    )
  }
}
export default UsermadeRecipeBook
