import React, { Component } from 'react'
import '../styles/base.css'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider, AuthRoute } from "../lib/auth"
import Login from "./auth/Login"
import Register from "./auth/Register"
import AccountHome from './Routes/accountHome'
import Landing from './Routes/landing'
import UserRecipe from './Routes/user-recipes'
import UserGroups from './Routes/user-groups'
import UserMessages from './Routes/user-messages'
import UserProfile from './Routes/user-profile'
import UserFavRecipes from './Routes/user-fav-recipes'
import UsermadeRecipeBook from './Routes/usermade-recipebook'
import WhatsHappenin from './Routes/whats-happenin'
import CreateGroup from './Routes/CreateGroup'
import UploadParentFunctional from './upload/UploadParentFunctional'
import uploadPhoto from './upload/uploadPhoto';
import Group from './Routes/Group'
import InviteUser from './Routes/InviteUser'
import RecipeView from './Routes/recipe-view'

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Provider store={store}>
          <Router>
            <div>
              {/* public routes */}
              <Switch>
                <Route exact path="/home" component={Landing} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
              </Switch>

              {/* private routes */}
              <AuthRoute path="/" exact component={AccountHome} />
              <AuthRoute path="/upload" component={UploadParentFunctional} />
              <AuthRoute path="/uploadphoto" exact component={uploadPhoto} />
              <AuthRoute path="/user_recipes" exact component={UserRecipe} />
              <AuthRoute path="/user_groups" exact component={UserGroups} />
              <AuthRoute path="/user_messages" exact component={UserMessages} />
              <AuthRoute path="/user_profile" exact component={UserProfile} />
              <AuthRoute path="/user_fav_recipes" exact component={UserFavRecipes} />
              <AuthRoute path="/usermade_recipebook" exact component={UsermadeRecipeBook} />
              <AuthRoute path="/recent_updates" exact component={WhatsHappenin} />
              <AuthRoute path="/creategroup" exact component={CreateGroup} />
              
              <AuthRoute path="/group/:group_id" exact component={Group} />
              <AuthRoute path="/group/:group_id/inviteUser" exact component={InviteUser} />
              <AuthRoute path="/user_recipes/:recipe_id" exact component={RecipeView} />
            </div>
          </Router>
        </Provider>
      </AuthProvider>
    )
  }
}

export default App
