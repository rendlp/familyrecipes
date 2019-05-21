import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FormContainer from './Upload'
import LogoutButton from '../logout-button'
import Header from '../header'
import Footer from '../footer'
import {getRecipeBooks} from '../../actions/actions'


class AccountHome extends Component {

  
  render() {
    return (
      <div>

        <Header />

        <div className="canvas2">
       

        <div className="accountNAV" id="left-panel">
          <Link to="/user_recipes"><p className="user-recipes">My Recipes</p></Link>
          <Link to="/user_groups"><p className="user-groups">My Groups</p></Link>
          <Link to="user_messages"><p className="user-messages">My Messages</p></Link>
          <Link to="/upload"><p className="upload">Upload Recipe</p></Link>
          <Link to="/user_profile"><p className="user-profile">My Profile</p></Link>
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
