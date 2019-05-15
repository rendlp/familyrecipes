import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FormContainer from './Upload'
import LogoutButton from '../logout-button'
import Header from '../header'
import Footer from '../footer'

class AccountHome extends Component {
  render() {
    return (
      <div>

        <Header />
        <LogoutButton />

        <div id="canvas2">

        <div className="accountNAV" id="left-panel">
          <Link to="/user_recipes"><p id="user-recipes">My Recipes</p></Link>
          <Link to="/user_groups"><p id="user-groups">My Groups</p></Link>
          <Link to="user_messages"><p id="user-messages">My Messages</p></Link>
          <Link to="/upload"><p id="upload">Upload Recipe</p></Link>
          <Link to="/user_profile"><p id="user-profile">My Profile</p></Link>
        </div>

        <div className="accountNAV" id="mid-panel">
          <Link to="/user_fav_recipes"><h1 className="title">My Favorite Recipes</h1></Link>
          <Link to="/usermade_recipebook"><p>Recipebook(playlist) 1</p></Link>
          <p>Recipebook(playlist) 2</p>
          <p>Recipebook(playlist) 3</p>
        </div>

          <div className="accountNAV" id="right-panel">
            <Link to="/recent_updates"><h1 className="title">Recent Updates</h1></Link>
          </div>

        </div>


          <Footer />
      </div>
    )
  }
}

export default AccountHome
