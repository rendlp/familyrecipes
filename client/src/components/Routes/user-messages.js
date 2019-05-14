import React, { Component } from 'react'
import Header from '../header'
import Footer from '../footer'
import LogoutButton from '../logout-button'

class UserGroups extends Component {
  render() {
    return (
      <div>
        <Header />
        <LogoutButton />
          <p>This page should render a user's messages</p>
        <Footer />
      </div>
    )
  }
}

export default UserGroups
