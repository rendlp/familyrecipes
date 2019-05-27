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
          <h1 className='title'>Books</h1>
          <Link to="/user_groups"><p className="leftP">Groups</p></Link>
          <Link to="/user_recipes"><p className="leftP">Recipes</p></Link>
          <Link to="/user_fav_recipes"><p className="leftP">Favorites</p></Link>
        <div className='space2'></div>
         
        <Link to={"/createrecipebook"}>
          <button className='abutton'>Create Book</button>
        </Link>
       
        </div>

        <div className="canvas2">
          <div className="books">
            <RecipeBookListAccountHome />
          </div>
        </div>
        
        <Footer />
      </div>
    )
  }
}

export default AccountHome;
