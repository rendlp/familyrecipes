import React, { Component, useContext } from 'react'
import Header from '../header'
import Footer from '../footer'
import LogoutButton from '../logout-button'
import { getUserRecipes } from '../../actions/actions'
import { AuthContext } from "../../lib/auth"

// const UserHooker = (props) => {
//   const { user } = useContext(AuthContext)
//
//   return <UserRecipe user={user} />
// }

class UserRecipe extends Component {

  componentDidMount() {
    getUserRecipes()
  }


  render() {
    return (
      <div>
        <Header />
        <LogoutButton />
          <p>This page should render a user's recipe list</p>
        <Footer />
      </div>
    )
  }
}
export default UserRecipe
