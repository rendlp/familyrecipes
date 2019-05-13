import React, { Component } from 'react'
import Header from './header'
import Footer from './footer'

class AccountHome extends Component {
  render() {
    return (
      <div>

        <Header />

        <div id="canvas2">

          <div className="accountNAV" id="left-panel">
            <p>Home</p>
            <p>My Groups</p>
            <p>My Messages</p>
            <p>Upload Recipe</p>
            <p>My Profile</p>
          </div>

          <div className="accountNAV" id="mid-panel">
            <h1 className="title">My Favorite Recipes</h1>
            <p>Recipebook(playlist) 1</p>
            <p>Recipebook(playlist) 2</p>
            <p>Recipebook(playlist) 3</p>
          </div>

          <div className="accountNAV" id="right-panel">
            <h1 className="title">Recent Updates</h1>
          </div>

        </div>

        <Footer />

      </div>
    )
  }
}

export default AccountHome
