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
       

        <div className="left-panel">
          <Link to="/user_recipes"><p className="leftP">My Recipes</p></Link>
          <Link to="/user_groups"><p className="leftP">My Groups</p></Link>
          <Link to="/user_fav_recipes"><p className="title">Favorites</p></Link>
          {/* <Link to="user_messages"><p className="leftP">My Messages</p></Link> */}
          <Link to="/upload"><p className="leftP">Upload Recipe</p></Link>
          <Link to="/user_profile"><p className="leftP">My Profile</p></Link>
        </div>

        <div className="books">

        <Link to="/usermade_recipebook">
         <div className='book'>
          <p>Recipe Book 1</p>
         </div>
        </Link>

          <div className='book'>
          <p>Recipe Book 2</p>
          </div>

          <div className='book'>
          <p>Recipe Book 3</p>
          </div>
      
        </div>

        </div>


          <Footer />
      </div>
    )
  }
}

export default AccountHome;
