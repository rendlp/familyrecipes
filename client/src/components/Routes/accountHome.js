import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../header'
import Footer from '../footer'
import RecipeBookListAccountHome from '../RecipeBookListAccountHome'

class AccountHome extends Component {

  render() {
    return (
      <div className='wrapper'>

        <Header />
        <div className="left-panel">
          <Link to="/user_recipes"><p className="leftP">My Recipes</p></Link>
          <Link to="/user_groups"><p className="leftP">My Groups</p></Link>
          <Link to="/user_fav_recipes"><p className="leftP">Favorites</p></Link>
          {/* <Link to="user_messages"><p className="leftP">My Messages</p></Link> */}
    
          {/* <Link to="/user_profile"><p className="leftP">My Profile</p></Link> */}
          {/* <Link to="/upload"><button className="uploadButton">Upload Recipe</button></Link> */}
        </div>

        <div className="canvas2">
      
      
        <div className="books">
          {/* <h1>recipe books</h1> */}
          <RecipeBookListAccountHome />
        </div>

          {/* {/* <div className='book'>
          <p>Recipe Book 2</p>
          </div> */}

          {/* <div className='book'>
          <p>Recipe Book 3</p>
          </div>  */}
      
        </div>
        <Footer />
        </div>
    )
  }
}

export default AccountHome;
