import React, { Component } from 'react'
import Header from '../header'
import Footer from '../footer'
import LogoutButton from '../logout-button'

class WhatsHappenin extends Component {
  render() {
    return (
      <div>
        <Header />
        <LogoutButton />
          <p>This page should render recent news and updates relevent to the user</p>
        <Footer />
      </div>
    )
  }
}

export default WhatsHappenin
