import React, { Component } from 'react'
import Header from '../header'
import Footer from '../footer'
import  { BrowserRouter as Route, Link } from 'react-router-dom'

class UserProfile extends Component {
  render() {
    return (
      <div>
        <Header />
        <button><Link to='/'>Back</Link></button>
          <p>This page should render a user's profile</p>
        <Footer />
      </div>
    )
  }
}
export default UserProfile
