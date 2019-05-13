import React, { Component } from 'react'
import Header from './header'
import Register from './auth/Register'
import Login from './auth/Login'
import Footer from './footer'

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />

        <div id="canvas">

          <div id="welcome">
            <h1 id="landing-intro">Welcome to FamilyRecipes.com</h1>
              <p>Here will be a paragraph explaining the application</p>
          </div>

          <div id="break">
          </div>

          <Login />

          <div id="break2">
          </div>

          <div id="landing-assets">
            <img className="landing-images" src="https://i.etsystatic.com/10404022/d/il/30e3e9/1748755203/il_340x270.1748755203_k0yt.jpg?version=0" />
            <img className="landing-images" src="https://dz2k5jx87b7zc.cloudfront.net/wp-content/uploads/2012/08/Secret-Recipes-300x300.jpg" />
            <img className="landing-images" src="https://i.ytimg.com/vi/XB592d56n9A/maxresdefault.jpg" />
          </div>

          <Footer />

        </div>

      </div>
    )
  }
}

export default Landing
